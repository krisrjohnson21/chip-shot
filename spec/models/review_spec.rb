require 'rails_helper'

describe Review do
  it { should belong_to :user }

  it { should have_valid(:rating).when(4) }
  it { should_not have_valid(:rating).when(nil, 0, 8) }

  it { should have_valid(:body).when("a body longer than ten characters") }
  it { should_not have_valid(:body).when(nil, "") }
end
