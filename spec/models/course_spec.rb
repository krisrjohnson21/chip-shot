require 'rails_helper'

describe Course do
  it { should have_many :reviews }
  it { should have_many :users }

  it { should have_valid(:name).when("Mt Hood") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:membership).when("Public") }
  it { should_not have_valid(:membership).when(nil, "") }

  it { should have_valid(:holes).when(9, 18, 27, 36) }
  it { should_not have_valid(:holes).when(nil, 4, 12) }

  it { should have_valid(:par).when(36, 72) }
  it { should_not have_valid(:par).when(nil, 4, 90) }

  it { should have_valid(:city).when("Melrose") }
  it { should_not have_valid(:city).when(nil, "") }

  it { should have_valid(:state).when("Massachusetts") }
  it { should_not have_valid(:state).when(nil, "") }

  it { should have_valid(:state).when("www.golf.com") }

  it { should have_valid(:range).when("Yes", "No") }
  it { should_not have_valid(:range).when(nil, "") }

  it { should have_valid(:carts).when("Yes", "No") }
  it { should_not have_valid(:carts).when(nil, "") }

  it { should have_valid(:rentals).when("Yes", "No") }
  it { should_not have_valid(:rentals).when(nil, "") }

  it { should have_valid(:lessons).when("Yes", "No") }
  it { should_not have_valid(:lessons).when(nil, "") }

  it { should have_valid(:latitude).when(42.3601) }
  it { should_not have_valid(:latitude).when(nil) }

  it { should have_valid(:longitude).when(71.0589) }
  it { should_not have_valid(:longitude).when(nil) }
end
