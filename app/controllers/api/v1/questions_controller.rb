class Api::V1::QuestionsController < Api::V1::ApplicationController

  before_action :require_login
  before_action :get_question, only: [:show]

  # show questions created by user
  def index
    render_json(current_user.created_questions)
  end

  # show an individual question created by user
  def show
    render_json @question
  end

  def create
    question = Question.new(create_params.merge({user: current_user}))
    
    if !question.save
      render_json_validation_error question
      return
    end

    render_json question, :created
  end

  # def update
  #   # TODO: to be implemented
  # end

  private

  def get_question
    @question = current_user.created_questions.find(params[:id])
    if @question.nil?
      raise ActiveRecord::RecordNotFound
    end
  end

  def create_params
    params.permit(:title, :difficulty, :mode, answers_attributes: [:title, :correct] )
  end
end
