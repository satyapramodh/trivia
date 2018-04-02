class Api::V1::QuestionsController < Api::V1::ApplicationController

  def index
    render_json(Question.all)
  end

  def show
    render_json(Question.find(params[:id]))
  end
end
