require 'rails_helper'

RSpec.describe Answer, type: :model do

  context "validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:question) }
    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:correct) }
  end

  context "associations" do
    it { should belong_to :question }
    it { should belong_to :user }
  end

end
