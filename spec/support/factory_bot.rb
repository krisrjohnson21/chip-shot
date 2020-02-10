require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:first) {|n| "John" }
    sequence(:last) {|n| "Smith" }
    sequence(:city) {|n| "Tucson" }
    sequence(:state) {|n| "Arizona" }
    sequence(:handicap) {|n| "25" }
    sequence(:bio) {|n| "I love winter golf!" }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
