require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:first_course) { Course.create(
    id: 1,
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
  ) }

  let!(:second_course) { Course.create(
    id: 2,
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
  ) }

  let!(:first_user) { User.create(
    id: 1,
    first: "Bobby",
    last: "Jones",
    email: "bobby@example.com",
    password: "password",
    city: "Malden",
    state: "Massachusetts",
    handicap: 25,
    bio: "Playing since I was in high school",
    profile_photo: "imagelink.jpg"
  ) }

  let!(:second_user) { User.create(
    id: 2,
    first: "Steve",
    last: "Smith",
    email: "steve@email.com",
    password: "password123",
    city: "Quincy",
    state: "Massachusetts",
    handicap: 30,
    bio: "Discovered the game after retirement"
  ) }

  let!(:first_review) { Review.create(
    id: 1,
    rating: 5,
    body: "What an awesome course",
    user: second_user,
    course: first_course
  ).to_json }

  let!(:second_review) { Review.create(
    id: 2,
    rating: 2,
    body: "What an average course",
    user: first_user,
    course: second_course
  ).to_json }

  describe "GET#show" do
    it "should return the courses and their reviews" do
      get :index, params: {
        course_id: first_course.id,
        reviews: first_course.reviews
      }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["reviews"].length).to be 2

      expect(returned_json["reviews"][0].length).to be 8
      expect(returned_json["reviews"][1].length).to be 8

      expect(returned_json["reviews"][0]["rating"]).to eq 2
      expect(returned_json["reviews"][0]["body"]).to eq "What an average course"
      expect(returned_json["reviews"][0]["user_id"]).to eq 1
      expect(returned_json["reviews"][0]["userFullName"]).to eq "Bobby Jones"
      expect(returned_json["reviews"][0]["course_id"]).to eq 2

      expect(returned_json["reviews"][1]["rating"]).to eq 5
      expect(returned_json["reviews"][1]["body"]).to eq "What an awesome course"
      expect(returned_json["reviews"][1]["user_id"]).to eq 2
      expect(returned_json["reviews"][1]["userFullName"]).to eq "Steve Smith"
      expect(returned_json["reviews"][1]["course_id"]).to eq 1
    end
  end
end
