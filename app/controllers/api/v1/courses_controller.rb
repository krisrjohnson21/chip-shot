class Api::V1::CoursesController < ApiController
  def index
    render json: Course.all
  end

  def show
    render json: Course.find(params["id"]), serializer: CourseSerializer
  end
end
