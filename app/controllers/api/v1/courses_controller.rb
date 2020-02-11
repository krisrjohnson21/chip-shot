class Api::V1::CoursesController < ApiController
  def index
    render json: Course.all
  end
end
