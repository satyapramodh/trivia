class Api::V1::SessionsController < Api::V1::ApplicationController

  before_action :require_login, only: :destroy

  def create
    if user = User.authenticate(create_params[:username], create_params[:password])
      render_json user.sessions.create, :created
    else
      render_json_error :unauthorized, :session_not_found
    end
  end

  def destroy
    if current_user.end_current_session authenticate_token
      head :ok
    end
  end

  private

  def create_params
    params.permit(:username, :email, :password)
  end
end