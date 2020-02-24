class Api::V1::UsersController < ApiController
  before_action :authenticate_user!

  def show
    user = User.find(params["id"])
    rounds = user.rounds

    render json: user
  end
end
