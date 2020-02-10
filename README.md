# ChipShot

[![Codeship Status for krisrjohnson21/chip-shot](https://app.codeship.com/projects/7a0a6db0-2e55-0138-1b5d-3e5b37e0d631/status?branch=master)](https://app.codeship.com/projects/384830)

Description: Golf is all about having fun and getting better! ChipShot helps
users do both by allowing users to find courses, create profiles, and add rounds
to their profile. Data visualization allows users to track progress, and a review
system allows them to choose new courses in an informed way.

Heroku Link
TKTKTK

# Technologies
-Ruby - 2.6.3
-Rails - 5.2.3
-React - 16.8.0
-CarrierWave - 2.0.2
-Foundation-Rails - 6.5

# Setup

To set up this app, download the repo and run the following commands in your terminal in exact order:

-yarn install<br />
-bundle exec bundle install<br />
-bundle exec rake db:create<br />
-bundle exec rake db:migrate && bundle exec rake db:rollback && bundle exec rake db:migrate<br />
-bundle exec rake db:seed<br />
-yarn start<br />
-new tab- bundle exec rails s<br />
-Navigate your browser to localhost:3000

# Testing

To run tests, run these files in a separate terminal tab:<br />
-bundle exec rake db:test:prepare<br />
-bundle exec rspec<br />
-yarn run test
