require 'rails_helper'

RSpec.describe "Api::V1::Trivia", type: :request do
  let!(:session) { FactoryBot.create(:session) }
  let(:user) { session.user }
  let!(:questions) { FactoryBot.create_list(:radio_question, 3, user: user) }
  let!(:radio_questions) { FactoryBot.create_list(:radio_question, 5) }
  let!(:text_questions) { FactoryBot.create_list(:text_question, 5) }
  let(:q_id) { radio_questions.first.id }

  describe "GET /api/v1/trivia" do
    include_examples "user authentication", "get", '/api/v1/trivia'

    context "when user created trivia" do
      before { get '/api/v1/trivia', headers: token_headers(session.token) }

      it 'returns questions' do
        expect(json).not_to be_empty
        expect(json.size).to eq(10)
      end
    end
  end

  describe "POST /api/v1/trivia" do
    let!(:valid_params) {{ params: { q_id: radio_questions.first.id, a_id: radio_questions.first.answers.first.id } }}
    let!(:invalid_params) {{ params: { q_id: text_questions.first.id } }}

    context "when user answered trivia with valid params" do
      before { post '/api/v1/trivia', valid_params.merge({headers: token_headers(session.token)}) }

      it 'returns answer' do
        expect(response).to have_http_status(:ok)
        expect(json).not_to be_empty
        expect(json["answer_id"]).to eq(valid_params[:params][:a_id])
      end
    end

    context "when user answered trivia with invalid params" do
      before { post '/api/v1/trivia', invalid_params.merge({headers: token_headers(session.token)}) }

      it 'returns error' do
        expect(response).to have_http_status(:bad_request)
        expect(response.body).to match(/Response should not be empty/)
      end
    end
  end

end
