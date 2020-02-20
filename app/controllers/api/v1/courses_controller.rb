class Api::V1::CoursesController < ApiController

  def index
    render json: Course.all
  end

  def show
    course = Course.find(params["id"])
    latitude = course.latitude
    longitude = course.longitude
    forecast = []

    if Rails.env.production? || Rails.env.development?
      base_url = "https://api.darksky.net/forecast/#{ENV["DARK_SKY_API_KEY"]}/#{latitude},#{longitude}?exclude=currently,hourly"
      response = Faraday.get("#{base_url}")
      parsed_response = JSON.parse(response.body)
      parsed_response["daily"]["data"].each do |day|
        forecast << day["summary"]
      end
    else
      forecast << ["Sunny", "Windy", "Rainy", "Gusty", "Snowing", "Sunny", "Windy", "Rainy"]
    end

    3.times { forecast.pop }

    course_data = {
      course: ActiveModelSerializers::SerializableResource.new(course, each_serializer: CourseSerializer),
      forecast: forecast
    }

    render json: course_data
  end

  def search
    @courses = Course.where("name ILIKE ? OR state ILIKE ?", "%#{params["search_string"]}%", "%#{params['search_string']}%")
    render json: @courses
  end
end
