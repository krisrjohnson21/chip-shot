class Api::V1::ReviewsController < ApiController
  before_action :authenticate_user!, except: [:show, :index]

  def index
    render json: Review.all
  end

  def show
    course = Course.find(params["id"])
    reviews = course.reviews
    render json: reviews
  end

  def create
    review = Review.new(review_params)
    course = Course.find(params["course_id"])
    review.course = course
    review.user = current_user

    if review.save
      render json: review
    else
      render json: { error: review.errors.full_messages }, status: unprocessable_entity
    end
  end

  def destroy
    course = Course.find(params["course_id"])
    review = Review.find(params["id"])
    review.destroy
    render json: reviews
  end

  protected
  def review_params
    params.permit("rating", "body")
  end
end
