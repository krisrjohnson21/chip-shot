class Api::V1::RoundsController < ApiController

  def index
    render json: Round.all
  end

  def show
    user_data = current_user
    rounds = user_data.rounds
    render json: user_data
  end

  def create
    round = Round.new(round_params)
    round.user = current_user

    if round.save
      render json: round
    else
      render json: { error: round.errors.full_messages }, status: unprocessable_entity
    end
  end

  def destroy
    user_data = User.find(params["user_id"])
    round = Round.find(params["id"])
    round.destroy
    render json: user_data.rounds
  end

  protected
  def round_params
    params.permit("score", "birdies", "pars", "date", "course")
  end

end
