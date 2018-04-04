require 'rails_helper'

RSpec.describe User, type: :model do

  context "validations" do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_uniqueness_of(:username) }
    it { should allow_values("john.doe@example.com", "john+doe@example.com",
    "john.doe1@example.com", "john-doe@example.com").
          for(:email) }
    it { should_not allow_values("john#doe@example.com", "john!doe@example.com",
    "john@doe@example.com", "john=doe@example.com").
          for(:email) }
  end

  context "associations" do
    it { should have_many :sessions }
    it { should have_many :inactive_sessions }
    it { should have_many :active_sessions }
  end

  context "method full_name: " do
    it "should fetch name when name is present" do
      user = FactoryBot.create(:user)
      expect(user.full_name).to eq(user.name)
    end

    it "should fetch username when name not present" do
      user = User.create(FactoryBot.attributes_for(:user).slice!(:name))
      expect(user.full_name).to eq(user.username)
    end
  end

  context "set password" do
    it "should hash password and set" do
      user = FactoryBot.create(:user, password: "this is a test")
      expect(user.encrypted_password).to be_present
      expect(user.salt).to be_present
      expect(user.password).to be_nil
    end

    it "should fail when password length is < 8" do
      expect { FactoryBot.create(:user, password: "test") }.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  context "verify password" do
    it "should succeed for correct password" do
      user = FactoryBot.create(:user, password: "this is a test")
      expect(User.authenticate(user.username, "this is a test")).to eq(user)
    end

    it "should fail for wrong password" do
      user = FactoryBot.create(:user, password: "this is a test")
      expect(User.authenticate(user.username, "this is a game")).to eq(false)
    end
  end

  context "sessions" do
    # handle by controller
    it "#end_current_session should fail to end current session when token is invalid"

    it "#end_current_session should end current session" do
      session = FactoryBot.create(:session)
      session.user.end_current_session session.token
      expect(session.reload.expired).to be_truthy
    end

    it "#end_all_sessions should end all sessions" do
      user = FactoryBot.create(:user)
      2.times do
        user.sessions.create
      end
      expect(user.active_sessions.count).to eq(2)
      user.end_all_sessions
      expect(user.active_sessions.count).to eq(0)
    end
  end

  describe "scores" do
    before :each do
      @user = FactoryBot.create(:user)
      @questions = FactoryBot.create_list(:radio_question, 3)
    end

    it "should provide weekly scores" do
      FactoryBot.create(:round, question: @questions[0], user: @user, answer: @questions[0].correct_answer)
      FactoryBot.create(:round, question: @questions[1], user: @user, answer: @questions[1].correct_answer, created_at: 1.months.ago)
      FactoryBot.create(:round, question: @questions[2], user: @user, answer: @questions[2].answers.select{|x| !x.correct}.first)
      expect(@user.get_weekly_score).to eq(1*Question::WIN + 1*Question::LOSS)
    end

    it "should provide total score" do
      FactoryBot.create(:round, question: @questions[0], user: @user, answer: @questions[0].correct_answer)
      FactoryBot.create(:round, question: @questions[1], user: @user, answer: @questions[1].correct_answer, created_at: 1.months.ago)
      FactoryBot.create(:round, question: @questions[2], user: @user, answer: @questions[2].answers.select{|x| !x.correct}.first)
      expect(@user.get_total_score).to eq(2*Question::WIN + 1*Question::LOSS)
    end

    it "should provide score as 0 when actual score is < 0" do
      FactoryBot.create(:round, question: @questions[2], user: @user, answer: @questions[2].answers.select{|x| !x.correct}.first)
      expect(@user.get_total_score).to eq(0)
    end
  end

  describe "#unanswered_questions" do
    let!(:user_a) { FactoryBot.create(:user) }
    let!(:user_b) { FactoryBot.create(:user) }
    let!(:questions_by_user_a) { FactoryBot.create_list(:text_question, 10, user: user_a) }
    let!(:questions_by_user_b) { FactoryBot.create_list(:radio_question, 7, user: user_b) }

    context "when user hasnt answered any questions before" do
      it "should return all unanswered questions" do
        expect(user_a.unanswered_questions.count).to eq(7)
        expect(user_a.unanswered_questions.pluck(:user_id)).not_to include(user_a.id)
      end
    end

    context "when user answered some questions before" do
      before do
        # answer 2 questions from a pool of 7
        sample_questions = questions_by_user_b.sample(2)
        FactoryBot.create(:round, user: user_a, question: sample_questions.first, answer: sample_questions.first.answers.first)
        FactoryBot.create(:round, user: user_a, question: sample_questions.last, answer: sample_questions.last.answers.last)
      end
      it "should return only unanswered questions" do
        expect(user_a.unanswered_questions.count).to eq(5)
      end
    end
  end

  describe "#question_response" do
    let!(:user_a) { FactoryBot.create(:user) }
    let!(:user_b) { FactoryBot.create(:user) }
    let!(:text_questions) { FactoryBot.create_list(:text_question, 2, user: user_b) }
    let!(:radio_questions) { FactoryBot.create_list(:radio_question, 2, user: user_b) }

    context "when user responds with valid data" do
      it "should return success for radio answer" do
        round = user_a.question_response ({
          question: radio_questions.first,
          answer: radio_questions.first.answers.first
        })
        expect(round).not_to be_nil
      end

      it "should return success for text answer" do
        round = user_a.question_response ({
          question: text_questions.first,
          answer: text_questions.first.answers.first,
          response: "hello"
        })
        expect(round).not_to be_nil
        expect(round.response).to eq("hello")
      end
    end

    context "when user responds with invalid data" do
      it "should return success for radio answer" do
        round = user_a.question_response ({
          question: nil,
          answer: radio_questions.first.answers.first
        })

        expect(round.valid?).to be_falsey
        expect(round.errors.full_messages.join).to match(/Question can't be blank/)
      end

      it "should return success for text answer" do
        round = user_a.question_response ({
          question: text_questions.first,
          answer: text_questions.first.answers.first,
          response: nil
        })

        expect(round.valid?).to be_falsey
        expect(round.errors.full_messages.join).to match(/Response should not be empty/)
      end
    end
  end



end
