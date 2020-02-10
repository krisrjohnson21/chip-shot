require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many :reviews }
  it { should have_many :rounds }

  it { should have_valid(:first).when("Johnny") }
  it { should_not have_valid(:first).when(nil, "") }

  it { should have_valid(:last).when("Smith") }
  it { should_not have_valid(:last).when(nil, "") }

  it { should have_valid(:email).when("john@smith.com") }
  it { should_not have_valid(:email).when(nil, "") }

  it { should have_valid(:city).when("Melrose") }
  it { should_not have_valid(:city).when(nil, "") }

  it { should have_valid(:state).when("Massachusetts") }
  it { should_not have_valid(:state).when(nil, "") }

  it { should have_valid(:handicap).when(20) }
  it { should_not have_valid(:handicap).when(nil, 110, -10) }

  it { should have_valid(:bio).when("Weekend duffer") }
  it { should_not have_valid(:bio).when(nil, "") }
end
