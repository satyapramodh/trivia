require 'rails_helper'

RSpec.describe Session, type: :model do
  context "validations" do
    it { should validate_presence_of(:user) }
    # token gets set on create, hence this test wont work
    # it { should validate_presence_of(:token) }
    it { should validate_uniqueness_of(:token) }
  end

  describe "#create" do
    it "should create new active session" do
      user = FactoryBot.create(:user)
      expect(user.active_sessions.count).to eq(0)
      session = user.sessions.create
      expect(user.active_sessions.count).to eq(1)
      expect(session.expired).to be_falsey
    end
  end

  describe "#end" do
    it "should end current session" do
      session = FactoryBot.create(:session)
      expect {session.end}.to change(session, :expired).from(false).to(true)
    end
  end

  context "#active_session_user" do
    it "should get user if active session" do
      session = FactoryBot.create(:session, expired: false)
      expect(session.active_session_user).to eq(session.user)
    end

    it "should get nil if inactive session" do
      session = FactoryBot.create(:session, expired: true)
      expect(session.active_session_user).to be_nil
    end
  end


end
