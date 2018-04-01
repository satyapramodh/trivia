require 'rails_helper'

RSpec.describe Question, type: :model do

  context "validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:mode) }
    it { should validate_presence_of(:user) }
    it { should define_enum_for(:difficulty).
      with([:easy, :medium, :hard]) }
    it { should validate_inclusion_of(:mode).
      in_array(%w(radio text)) }
  end

  context "associations" do
    it { should belong_to(:user) }
    it { should have_many(:answers) }
    it { should accept_nested_attributes_for(:answers) }
  end

  describe "association answers" do
    before :each do
      user = FactoryBot.create(:user)
      @qattrs = {
        title: Faker::Lorem.paragraph,
        difficulty: 0,
        mode: "radio",
        user: user,
        answers_attributes: [
          { title: Faker::Lorem.words(2).join(" "), user: user, correct: true },
          { title: Faker::Lorem.words(2).join(" "), user: user, correct: false },
          { title: Faker::Lorem.words(2).join(" "), user: user, correct: false }
        ]
      }
    end

    context "for radio question" do
      it "should succeed when having answers with one correct" do
        q = Question.new(@qattrs)
        expect(q.valid?).to be_truthy
      end

      it "should fail when having answers with all incorrect" do
        @qattrs[:answers_attributes].map!{|x| x[:correct] = false; x}
        q = Question.new(@qattrs)
        expect(q.valid?).to be_falsey
        # errors to 'have a correct answer'
        expect(q.errors.messages.values.flatten.join(" ")).to include("have a correct answer")
      end

      it "should fail when having only one answer" do
        @qattrs[:answers_attributes] = @qattrs[:answers_attributes].reject{|x| !x[:correct]}
        q = Question.new(@qattrs)
        expect(q.valid?).to be_falsey
        # errors to have 'at least two answers defined'
        expect(q.errors.messages.values.flatten.join(" ")).to include("at least two answers")
      end
    end

    context "for text question" do
      it "should succeed with only one correct answer" do
        @qattrs[:mode] = "text"
        @qattrs[:answers_attributes] = @qattrs[:answers_attributes].reject{|x| !x[:correct]}
        q = Question.new(@qattrs)
        expect(q.valid?).to be_truthy
      end

      it "should fail for more than one answer" do
        @qattrs[:mode] = "text"
        q = Question.new(@qattrs)
        expect(q.valid?).to be_falsey
        errors = q.errors.messages.values.flatten.join(" ")
        # errors to have 'only one answer defined for a text based'
        expect(errors).to include("only one answer defined for a text")
      end
    end

  end
end
