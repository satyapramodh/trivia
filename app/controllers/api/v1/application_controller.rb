class Api::V1::ApplicationController < ActionController::API
  include Response
  include ExceptionHandler
  include ActionController::HttpAuthentication::Token::ControllerMethods
  include ActionController::MimeResponds

  def require_login
    authenticate_user || render_json_error(:unauthorized, :session_not_found)
  end

  def current_user
    @current_user ||= authenticate_user
  end

   def fallback_index_html
    respond_to do |format|
      format.html { render body: Rails.root.join('public/index.html').read }
    end
  end

  private

  def get_question
    @question = current_user.created_questions.find(params[:q_id] || params[:id])
    if @question.nil?
      raise ActiveRecord::RecordNotFound
    end
  end

  def get_answer
    @answer = Answer.find_by_id(params[:a_id] || params[:id])
  end

  def authenticate_token
    authenticate_with_http_token do |token, options|
      token
    end
  end

  def authenticate_user
    authenticate_with_http_token do |token, options|
      session = Session.find_by(token: token)
      if session
        return session.active_session_user
      end
    end
  end
end
