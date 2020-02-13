class Api::V1::CoursesController < ApiController

  def index
    render json: Course.all
  end

  def show
    course = Course.find(params["id"])
    render json: course, serializer: CourseSerializer
    latitude = course.latitude
    longitude = course.longitude

    base_url = "https://api.darksky.net/forecast/#{ENV["DARK_SKY_API_KEY"]}/#{latitude},#{longitude}?exclude=currently,hourly"
    response = Faraday.get("#{base_url}")
    parsed_response = JSON.parse(response.body)
  end

  def search
    @courses = Course.where("name ILIKE ?", "%#{params["search_string"]}%")
    render json: @courses
  end
end
