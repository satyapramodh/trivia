require 'rails_helper'

RSpec.describe "Api::V1::Users", type: :request do
  describe "POST /api/v1/users" do
    let(:valid_attrs) { {
      username: "test",
      email: "test@example.com",
      password: "hello1234567",
      password_confirmation: "hello1234567"
    } }

    let(:invalid_attrs) { {
      username: "test",
      email: "test@example.com",
      password: "hello1234567"
    } }


    context "when user record doesnt exist" do
      it "should create user when data is valid" do
        post '/api/v1/users', params: valid_attrs

        expect(response).to have_http_status(:created)
        expect(json['id']).to be_present
      end

      it "should fail when password_confirmation is not present" do
        post '/api/v1/users', params: invalid_attrs
        expect(response).to have_http_status(:bad_request)
        expect(json['errors']).to be_present
        expect(response.body).to match(/Password confirmation can't be blank/)
      end

      it "should fail when email is not correct" do
        post '/api/v1/users', params: valid_attrs.merge({email: "test"})
        expect(response).to have_http_status(:bad_request)
        expect(json['errors']).to be_present
        expect(response.body).to match(/Email/)
      end

      it "should fail when passwords do not match" do
        post '/api/v1/users', params: valid_attrs.merge({password_confirmation: "test"})
        expect(response).to have_http_status(:bad_request)
        expect(json['errors']).to be_present
        expect(response.body).to match(/Password confirmation doesn't match/)
      end

      it "should fail when username is not present" do
        post '/api/v1/users', params: valid_attrs.except(:username)
        expect(response).to have_http_status(:bad_request)
        expect(json['errors']).to be_present
        expect(response.body).to match(/Username/)
      end
    end

    context "when user record already exist" do
      it "should fail" do
        user = FactoryBot.create(:user, valid_attrs)
        post '/api/v1/users', params: valid_attrs

        expect(response).to have_http_status(:bad_request)
        expect(json['errors']).to be_present
        expect(response.body).to match(/Username has already been taken/)
        expect(response.body).to match(/Email has already been taken/)
      end
    end
  end

  describe "GET /api/v1/users/me" do
    let(:session) { FactoryBot.create(:session) }

    context "when user is signed in" do
      it "should succeed" do
        get '/api/v1/users/me', headers: token_headers(session.token)
        expect(response).to have_http_status(:ok)
        expect(json['username']).to eq(session.user.username)
      end
    end

    context "when user is NOT signed in" do
      it "should fail" do
        get '/api/v1/users/me'
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
