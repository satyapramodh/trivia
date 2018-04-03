class Api::V1::ApplicationController < ActionController::API
  include Response
  include ExceptionHandler
  include ActionController::HttpAuthentication::Token::ControllerMethods

  def require_login
    authenticate_user || render_json_error(:unauthorized, :session_not_found)
  end

  def current_user
    @current_user ||= authenticate_user
  end

  private

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
