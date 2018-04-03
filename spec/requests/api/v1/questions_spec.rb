require 'rails_helper'

RSpec.describe "Api::V1::Questions", type: :request do
  let!(:questions) { FactoryBot.create_list(:radio_question, 10) }
  let(:q_id) { questions.first.id }

  describe "GET /api/v1/questions" do

    before { get '/api/v1/questions' }

    it "returns status 200" do
      expect(response).to have_http_status(200)
    end

    it 'returns questions' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
  end

  describe "GET /api/v1/questions/:id" do

    before { get '/api/v1/questions/1234123412' }

    it "returns status 200" do
      expect(response).to have_http_status(404)
    end

    it 'returns questions' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end
  end
end
