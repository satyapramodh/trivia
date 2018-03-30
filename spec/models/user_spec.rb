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
    it { should have_one :active_session }
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

end
