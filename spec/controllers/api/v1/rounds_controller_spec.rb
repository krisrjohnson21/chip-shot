require "rails_helper"

RSpec.describe Api::V1::RoundsController, type: :controller do
  let!(:first_user) { User.create(
    id: 1,
    first: "Timothy",
    last: "West",
    email: "tim@example.com",
    password: "password",
    city: "Brookline",
    state: "Massachusetts",
    handicap: 15,
    bio: "I made a hole-in-one in 2004",
  ) }

  let!(:first_round) { Round.create(
    score: 80,
    birdies: 0,
    pars: 5,
    date: "06/12/2019",
    course: "Mt Hood Municipal Golf Course",
    user: first_user,
  ).to_json }

  let!(:second_round) { Round.create(
    score: 76,
    birdies: 2,
    pars: 4,
    date: "07/01/2019",
    course: "Boston Golf Course",
    user: first_user,
  ).to_json }

  describe "GET#index" do
    it "should return the user's rounds" do
      sign_in first_user
      
      get :index, params: {
        user_id: first_user.id,
        rounds: first_user.rounds
      }

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to be 2

      expect(returned_json[0]["score"]).to eq 80
      expect(returned_json[0]["birdies"]).to eq 0
      expect(returned_json[0]["pars"]).to eq 5
      expect(returned_json[0]["date"]).to eq "06/12/2019"
      expect(returned_json[0]["course"]).to eq "Mt Hood Municipal Golf Course"
      expect(returned_json[0]["user_id"]).to eq 1

      expect(returned_json[1]["score"]).to eq 76
      expect(returned_json[1]["birdies"]).to eq 2
      expect(returned_json[1]["pars"]).to eq 4
      expect(returned_json[1]["date"]).to eq "07/01/2019"
      expect(returned_json[1]["course"]).to eq "Boston Golf Course"
      expect(returned_json[1]["user_id"]).to eq 1
    end
  end
end
