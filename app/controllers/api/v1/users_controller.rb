class Api::V1::UsersController < ApiController

  def show
    user_data = current_user
    rounds = user.rounds

    render json: user_data
  end
end
