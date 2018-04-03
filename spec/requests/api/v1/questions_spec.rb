require 'rails_helper'

RSpec.describe "Api::V1::Questions", type: :request do
  let!(:session) { FactoryBot.create(:session) }
  let(:user) { session.user }
  let!(:questions) { FactoryBot.create_list(:radio_question, 3, user: user) }
  let!(:other_questions) { FactoryBot.create_list(:radio_question, 5) }
  let(:q_id) { questions.first.id }

  describe "GET /api/v1/questions" do
    include_examples "user authentication", "get", '/api/v1/questions'

    context "when user created questions" do
      before { get '/api/v1/questions', headers: token_headers(session.token) }

      it 'returns questions' do
        expect(json).not_to be_empty
        expect(json.size).to eq(3)
      end
    end
  end

  describe "GET /api/v1/questions/:id" do

    before { get '/api/v1/questions/1234123412', headers: token_headers(session.token) }

    it "returns status 200" do
      expect(response).to have_http_status(404)
    end

    it 'returns questions' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end
  end

  describe "POST /api/v1/questions/" do
    let(:valid_params) { {  } }
    # before { post '/api/v1/questions/', valid_params, headers: token_headers(session.token) }

    it "returns status 201" do
      # expect(response).to have_http_status(:created)
    end

    it 'return question' do

    end
  end
end
