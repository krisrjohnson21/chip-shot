require 'rails_helper'

describe Round do
  it { should belong_to :user }

  it { should have_valid(:score).when(85) }
  it { should_not have_valid(:score).when(nil, 20, 500) }

  it { should have_valid(:birdies).when(3) }
  it { should_not have_valid(:birdies).when(nil, 20, -5) }

  it { should have_valid(:pars).when(5) }
  it { should_not have_valid(:pars).when(nil, 20, -5) }

  it { should have_valid(:date).when("10/10/2019") }
  it { should_not have_valid(:date).when(nil, "") }

  it { should have_valid(:course).when("Mt Hood Municipal Golf Course") }
  it { should_not have_valid(:course).when(nil, "") }
end
