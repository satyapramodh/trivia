require 'rails_helper'

RSpec.describe User, type: :model do

  context "validations" do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:encrypted_password) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_uniqueness_of(:username) }
  end
end
