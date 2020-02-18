require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :controller do
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
    user: first_user,
  ).to_json }

  let!(:second_round) { Round.create(
    score: 76,
    birdies: 2,
    pars: 4,
    user: first_user,
  ).to_json }

  describe "GET#show" do
    it "should return the user and their details" do
      get :show, params: {id: first_user.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to be 1

      expect(returned_json["user"].length).to be 10
      expect(returned_json["user"]["rounds"].length).to be 2

      expect(returned_json["user"]["rounds"][0]["score"]).to eq 80
      expect(returned_json["user"]["rounds"][0]["birdies"]).to eq 0
      expect(returned_json["user"]["rounds"][0]["pars"]).to eq 5
      expect(returned_json["user"]["rounds"][0]["user_id"]).to eq 1

      expect(returned_json["user"]["rounds"][1]["score"]).to eq 76
      expect(returned_json["user"]["rounds"][1]["birdies"]).to eq 2
      expect(returned_json["user"]["rounds"][1]["pars"]).to eq 4
      expect(returned_json["user"]["rounds"][1]["user_id"]).to eq 1
    end
  end
end
