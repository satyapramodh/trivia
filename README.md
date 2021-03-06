# Trivia App [![Build Status](https://travis-ci.org/satyapramodh/trivia.svg?branch=master)](https://travis-ci.org/satyapramodh/trivia?branch=master)


Build passing URL: https://travis-ci.org/satyapramodh/trivia?branch=master

* Ruby version \
Ruby 2.4.2 \
Rails 5.1.5

* Setup \
`bundle install` \
`cd client` \
`npm install`

* Database creation \
From root folder, \
`rake db:setup`

* Database initialization \
`rake db:seed`

* How to run the test suite \
From root folder, \
`bundle exec rspec spec/`

* Deployment instructions \
Deploy to heroku. Procfiles are already set.

# Start app with
`foreman start -f Procfile.dev`


# Setup Notes
1. `bundle install`
2. Setup pg, add database.yml with configs with help of database.yml.sample
3. Run `rake db:setup`
4. Run `rake db:seed`
5. Run `bundle exec rspec spec/` for running unit, integration tests. (Currently at 99% coverage for backend)
6. Frontend is React. Files can be found under client/ folder.
7. `npm install` within client folder to setup.
8. For deployments, `Procfiles` for different enviornments are setup. (Heroku)

# Features
1. Question can be of radio/choice based or text based.
2. In a choice based question, choosing an answer from multiple options is allowed.
3. In a text based question, the answer must be typed.
4. Rounds are available for trivia.
5. Scoreboard can be generated by aggregating User's wins and loss.
6. Test Driven Development with 99% coverage.
7. User Faker, Rspec, FactoryBot, DatabaseCleaner to handle tests.

# Finished
1. Backend done.
2. APIs are available at `process.env.API_URL OR "http://localhost:3001"`.
3. Currently React, Redux, Redux saga, bootstrap-sass are setup.
4. Watchers for scss precompiling setup.
5. Redux, Redux saga setup for User Registration.
6. Deployment configuration to Heroku.
7. Redux, Redux saga setup for Registration, Login, Questions List, Question and Answer components.
8. API integration with frontend.

# Backlog
1. Frontend React components for Question create form and scoreboard,
2. Updated ui for questions to show one question at a time with next and previous buttons instead of current boilerplate design.
3. Redux, Redux saga setup for  Answer, Rounds and Scoreboard.

# Future
1. Timed (10sec) question/answering.
2. Setup Sidekiq for background working of scores.
3. Setup cron jobs via Sidekiq to generate weekly, monthly scoreboards.
4. Tests for frontend using Mocha, Chai.
5. Vote up/down of questions and better sort questions.