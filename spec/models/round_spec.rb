require 'rails_helper'

RSpec.describe Round, type: :model do
  context "associations" do
    it { should belong_to(:user) }
    it { should belong_to(:question) }
  end

  context "validations" do
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:question) }
  end

  context "custom validations" do
    it "should fail for no reponse on text question" do
      question = FactoryBot.create(:text_question)
      round = FactoryBot.build(:round, user: question.user, question: question)
      expect(round.valid?).to be_falsey
      expect(round.errors.messages.values.flatten.join(" ")).to include("not be empty for a text")
    end

    it "should succeed for reponse on text question" do
      question = FactoryBot.create(:text_question)
      round = FactoryBot.build(:text_round, user: question.user, question: question)
      expect(round.valid?).to be_truthy
    end

    it "should fail for no answer on choice question" do
      question = FactoryBot.create(:radio_question)
      round = FactoryBot.build(:round, user: question.user, question: question)
      expect(round.valid?).to be_falsey
      expect(round.errors.messages.values.flatten.join(" ")).to include("not be empty for a choice")
    end

    it "should succeed for an answer on choice question" do
      question = FactoryBot.create(:radio_question)
      round = FactoryBot.build(:round, user: question.user, question: question, answer: question.answers.sample)
      expect(round.valid?).to be_truthy
    end
  end

  describe "#update_response" do
    context "when text question" do
      it "should correct:true if answered right" do
        question = FactoryBot.create(:text_question)
        round = FactoryBot.create(:round, user: question.user, question: question, response: question.answers.first.title)
        expect(round.reload.correct).to be_truthy
      end
      it "should correct:false if answered wrong" do
        question = FactoryBot.create(:text_question)
        round = FactoryBot.create(:round, user: question.user, question: question, response: "asd@#$#$%")
        expect(round.correct).to be_falsey
      end
    end

    context "when radio question" do
      it "should correct:true if answered right" do
        question = FactoryBot.create(:radio_question)
        answer = question.answers.select{|x| x.correct}.first
        round = FactoryBot.create(:round, user: question.user, question: question, answer: answer)
        expect(round.reload.correct).to be_truthy
      end

      it "should correct:false if answered wrong" do
        question = FactoryBot.create(:radio_question)
        answer = question.answers.select{|x| !x.correct}.first
        round = FactoryBot.create(:round, user: question.user, question: question, answer: answer)
        expect(round.reload.correct).to be_falsey
      end
    end
  end
end
