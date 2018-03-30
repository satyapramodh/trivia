require 'rails_helper'

RSpec.describe User, type: :model do

  context "validations" do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:encrypted_password) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_uniqueness_of(:username) }
    it { should allow_values("john.doe@example.com", "john+doe@example.com",
    "john.doe1@example.com", "john-doe@example.com").
          for(:email) }
    it { should_not allow_values("john#doe@example.com", "john!doe@example.com",
    "john@doe@example.com", "john=doe@example.com").
          for(:email) }
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

end
