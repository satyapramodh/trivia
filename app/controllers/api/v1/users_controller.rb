class Api::V1::UsersController < Api::V1::ApplicationController

  def create
    user = User.new(create_params)

    if !user.save
      render_json_validation_error user
      return
    end

    render_json user, :created
  end

  def me
    # TODO: get session token to show this resource
  end

  private

  def create_params
    params.permit(:name, :username, :email, :password, :password_confirmation)
  end

end
