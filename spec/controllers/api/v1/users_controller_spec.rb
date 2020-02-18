require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :controller do
  let!(:first_user) { User.create(
    id: 1,
    first: "Darren",
    last: "Barnes",
    email: "darren@example.com",
    password: "password",
    city: "Wakefield",
    state: "Massachusetts",
    handicap: 25,
    bio: "Playing since I turned 40",
  ) }

  describe "GET#show" do
    it "should return the user and their details" do
      get :show, params: {id: first_user.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to be 1

      expect(returned_json["user"].length).to be 10

      expect(returned_json["user"]["first"]).to eq "Darren"
      expect(returned_json["user"]["last"]).to eq "Barnes"
      expect(returned_json["user"]["city"]).to eq "Wakefield"
      expect(returned_json["user"]["state"]).to eq "Massachusetts"
      expect(returned_json["user"]["handicap"]).to eq "25"
      expect(returned_json["user"]["bio"]).to eq "Playing since I turned 40"
    end
  end
end
