class Api::V1::CoursesController < ApiController

  def index
    render json: Course.all
  end

  def show
    course = Course.find(params["id"])
    latitude = course.latitude
    longitude = course.longitude
    reviews = course.reviews

    if Rails.env.production? || Rails.env.development?
      base_url = "https://api.darksky.net/forecast/#{ENV["DARK_SKY_API_KEY"]}/#{latitude},#{longitude}?exclude=currently,hourly"
      response = Faraday.get("#{base_url}")
      parsed_response = JSON.parse(response.body)
      forecast = []
      parsed_response["daily"]["data"].each do |day|
        forecast << day["summary"]
        3.times { forecast.pop }
      end
    else
      forecast = ["Windy", "Gusty", "Sunny", "Snowy", "Rainy"]
    end


    course_data = {
      course: course,
      reviews: reviews,
      forecast: forecast
    }

    render json: course_data
  end

  def search
    @courses = Course.where("name ILIKE ?", "%#{params["search_string"]}%")
    render json: @courses
  end
end
