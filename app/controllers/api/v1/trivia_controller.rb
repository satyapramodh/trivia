class Api::V1::TriviaController < Api::V1::ApplicationController

  before_action :require_login
  before_action :get_ques, only: [:create]

  def index
    render_json(current_user.unanswered_questions)
  end

  def create
    trivia = current_user.question_response({
      question: get_ques,
      answer: get_answer,
      response: params[:response]
    })

    if !trivia.valid?
      render_json_validation_error trivia
      return
    end
    # TODO: change serializer to show answer
    render_json trivia
  end

  private
  def get_ques
    @question = Question.find_by_id(params[:q_id] || params[:id])
  end

end
