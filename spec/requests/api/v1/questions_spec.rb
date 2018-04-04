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
    let(:valid_params) { {
      params: {
        title: "Quia hic impedit animi aut veritatis.",
        difficulty: 0,
        mode: "radio",
        answers_attributes: [
          { title: "ans 1", correct: true },
          { title: "ans 2", correct: false },
          { title: "ans 3", correct: false }
        ]
      },
      as: :json      
    } }

    let(:invalid_qparams) { {
      params: {
        title: "",
        difficulty: 0,
        mode: "radio",
        answers_attributes: [
          { title: "ans 1", correct: true },
          { title: "ans 2", correct: false },
          { title: "ans 3", correct: false }
        ]
      },
      as: :json      
    } }
    let(:invalid_aparams) { {
      params: {
        title: "Quia hic impedit animi aut veritatis.",
        difficulty: 0,
        mode: "radio",
        answers_attributes: [
          { title: "ans 1", correct: false },
          { title: "ans 2", correct: false },
          { title: "ans 3", correct: false }
        ]
      },
      as: :json      
    } }
    
    context "when valid params" do
      before { post '/api/v1/questions/', valid_params.merge({headers: token_headers(session.token)}) }

      it "should return status 201" do      
        expect(response).to have_http_status(:created)
      end

      it 'should return question' do
        expect(json["title"]).to eq(valid_params[:params][:title])
        expect(json["answers"].length).to eq(valid_params[:params][:answers_attributes].length)
      end
    end

    context "when invalid params" do
      it 'should return question error for question invalid params' do
        post '/api/v1/questions/', invalid_qparams.merge({headers: token_headers(session.token)})
        expect(response).to have_http_status(:bad_request)
        expect(response.body).to match(/Title can't be blank/)
      end

      it 'should return question error for question invalid params' do
        post '/api/v1/questions/', invalid_aparams.merge({headers: token_headers(session.token)})
        expect(response).to have_http_status(:bad_request)
        expect(response.body).to match(/should have a correct answer/)
      end
    end
  end
end
