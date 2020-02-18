class Api::V1::UsersController < ApiController

  def show
    user = User.find(params["id"])
    rounds = user.rounds

    render json: user
  end
end
