require "rails_helper"

RSpec.describe Api::V1::CoursesController, type: :controller do
  let!(:first_user) { User.create(
    first: "Bobby",
    last: "Jones",
    email: "bobby@example.com",
    password: "password",
    city: "Malden",
    state: "Massachusetts",
    handicap: 25,
    bio: "Playing since I was in high school",
  ) }

  let!(:first_course) { Course.create(
    name: "Boston Golf Course",
    membership: "Public",
    holes: 9,
    par: 36,
    address: "100 Main Street",
    city: "Boston",
    state: "Massachusetts",
    website: "www.golf.com",
    range: "Yes",
    carts: "Yes",
    rentals: "Yes",
    lessons: "Yes",
    url: "https://www.stonegategolfclub.com/wp-content/uploads/sites/7256/2018/12/home_pic.jpg",
    latitude: 42.3601,
    longitude: 71.0589
  ) }

  let!(:second_course) { Course.create(
    name: "Quincy Golf Course",
    membership: "Private",
    holes: 18,
    par: 72,
    address: "100 Maple Avenue",
    city: "Quincy",
    state: "Massachusetts",
    website: "www.newgolf.com",
    range: "Yes",
    carts: "Yes",
    rentals: "Yes",
    lessons: "Yes",
    url: "https://www.allentowngolf.org/images/template/showcase3.jpg",
    latitude: 42.2529,
    longitude: 71.0023
  ) }

  describe "GET#index" do
    it "should return the courses and their names" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["courses"].length).to be 2

      expect(returned_json["courses"][0].length).to be 17
      expect(returned_json["courses"][1].length).to be 17

      expect(returned_json["courses"][0]["name"]).to eq "Boston Golf Course"
      expect(returned_json["courses"][0]["membership"]).to eq "Public"
      expect(returned_json["courses"][0]["holes"]).to eq 9
      expect(returned_json["courses"][0]["par"]).to eq 36
      expect(returned_json["courses"][0]["address"]).to eq "100 Main Street"
      expect(returned_json["courses"][0]["city"]).to eq "Boston"
      expect(returned_json["courses"][0]["state"]).to eq "Massachusetts"
      expect(returned_json["courses"][0]["website"]).to eq "www.golf.com"
      expect(returned_json["courses"][0]["range"]).to eq "Yes"
      expect(returned_json["courses"][0]["carts"]).to eq "Yes"
      expect(returned_json["courses"][0]["rentals"]).to eq "Yes"
      expect(returned_json["courses"][0]["lessons"]).to eq "Yes"
      expect(returned_json["courses"][0]["url"]).to eq "https://www.stonegategolfclub.com/wp-content/uploads/sites/7256/2018/12/home_pic.jpg"
      expect(returned_json["courses"][0]["latitude"]).to eq 42.3601
      expect(returned_json["courses"][0]["longitude"]).to eq 71.0589

      expect(returned_json["courses"][1]["name"]).to eq "Quincy Golf Course"
      expect(returned_json["courses"][1]["membership"]).to eq "Private"
      expect(returned_json["courses"][1]["holes"]).to eq 18
      expect(returned_json["courses"][1]["par"]).to eq 72
      expect(returned_json["courses"][1]["address"]).to eq "100 Maple Avenue"
      expect(returned_json["courses"][1]["city"]).to eq "Quincy"
      expect(returned_json["courses"][1]["state"]).to eq "Massachusetts"
      expect(returned_json["courses"][1]["website"]).to eq "www.newgolf.com"
      expect(returned_json["courses"][1]["range"]).to eq "Yes"
      expect(returned_json["courses"][1]["carts"]).to eq "Yes"
      expect(returned_json["courses"][1]["rentals"]).to eq "Yes"
      expect(returned_json["courses"][1]["lessons"]).to eq "Yes"
      expect(returned_json["courses"][1]["url"]).to eq "https://www.allentowngolf.org/images/template/showcase3.jpg"
      expect(returned_json["courses"][1]["latitude"]).to eq 42.2529
      expect(returned_json["courses"][1]["longitude"]).to eq 71.0023
    end
  end

  describe "GET#show" do
    it "should return the course and their attributes" do
      sign_in first_user

      get :show, params: {id: first_course.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["course"]["course"]["name"]).to eq "Boston Golf Course"
      expect(returned_json["course"]["course"]["membership"]).to eq "Public"
      expect(returned_json["course"]["course"]["holes"]).to eq 9
      expect(returned_json["course"]["course"]["par"]).to eq 36
      expect(returned_json["course"]["course"]["address"]).to eq "100 Main Street"
      expect(returned_json["course"]["course"]["city"]).to eq "Boston"
      expect(returned_json["course"]["course"]["state"]).to eq "Massachusetts"
      expect(returned_json["course"]["course"]["website"]).to eq "www.golf.com"
      expect(returned_json["course"]["course"]["range"]).to eq "Yes"
      expect(returned_json["course"]["course"]["carts"]).to eq "Yes"
      expect(returned_json["course"]["course"]["rentals"]).to eq "Yes"
      expect(returned_json["course"]["course"]["lessons"]).to eq "Yes"
      expect(returned_json["course"]["course"]["url"]).to eq "https://www.stonegategolfclub.com/wp-content/uploads/sites/7256/2018/12/home_pic.jpg"
      expect(returned_json["course"]["course"]["latitude"]).to eq 42.3601
      expect(returned_json["course"]["course"]["longitude"]).to eq 71.0589
    end
  end
end
