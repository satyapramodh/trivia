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
  end

  context "validations for answers" do
    it "should have atleast one answer"
    it "should have one correct answer"
    it "should have only one correct answer"
    it "should have atleast two answers if radio/choice based question"
  end
end
