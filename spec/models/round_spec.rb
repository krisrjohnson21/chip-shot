require 'rails_helper'

describe Round do
  it { should belong_to :user }

  it { should have_valid(:score).when(85) }
  it { should_not have_valid(:score).when(nil, 20, 500) }

  it { should have_valid(:birdies).when(3) }
  it { should_not have_valid(:birdies).when(nil, 20, -5) }

  it { should have_valid(:pars).when(5) }
  it { should_not have_valid(:pars).when(nil, 20, -5) }
end
