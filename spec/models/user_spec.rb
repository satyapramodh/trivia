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

  context "create" do
    it "should create user with all params" do
    end

    it "should NOT create user with only some params" do
    end

  end

end
