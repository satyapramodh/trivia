require 'rails_helper'

RSpec.describe "Api::V1::Sessions", type: :request do
  describe "GET /api/v1/login" do
    let!(:user) { FactoryBot.create(:user, username: "example", password: "example123") }
    let(:session) { FactoryBot.create(:session, user: user) }
    let(:valid_params) { { username: "example", password: "example123" } }
    context "when the user credentials are correct" do
      it "should give a valid session token" do
        post '/api/v1/login', params: valid_params
        expect(response).to have_http_status(:created)
        expect(json['token']).to eq(session.token)
      end
    end
    context "when the user credentials are wrong" do
      it "should not send valid credentials" do
        post '/api/v1/login', params: valid_params.merge({password: "wrongpassword"})
        expect(response).to have_http_status(:bad_request)
      end
    end
  end

  describe "GET /api/v1/logout" do
    it "works! (now write some real specs)" do
      post '/api/v1/login'
      expect(response).to have_http_status(:ok)
    end
  end
end
