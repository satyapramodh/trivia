require 'rails_helper'

RSpec.describe "Api::V1::Sessions", type: :request do
  describe "GET /api/v1/login" do
    let!(:user) { FactoryBot.create(:user, username: "example", password: "example123") }
    let(:valid_params) { { username: "example", password: "example123" } }
    context "when the user credentials are correct" do
      it "should give a valid session token" do
        post '/api/v1/login', params: valid_params
        expect(response).to have_http_status(:created)
        expect(json['token']).to eq(user.sessions.first.token)
      end
    end
    context "when the user credentials are wrong" do
      it "should not send valid credentials" do
        post '/api/v1/login', params: valid_params.merge({password: "wrongpassword"})
        expect(response).to have_http_status(:unauthorized)
        expect(response.body).to match(/User authentication failed/)
      end
    end
  end

  describe "GET /api/v1/logout" do
    let!(:user) { FactoryBot.create(:user) }
    let(:session) { FactoryBot.create(:session, user: user) }

    context "when valid user token is sent" do
      it "should succeed" do
        delete '/api/v1/logout', headers: token_headers(session.token)
        expect(response).to have_http_status(:ok)
      end
    end

    context "when invalid user token is sent" do
      it "should fail" do
        delete '/api/v1/logout'
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
