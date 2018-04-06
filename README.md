# Trivia App

* Ruby version
Ruby 2.4.2

Rails 5.1.5

* Setup
`bundle install`
`cd client`
`npm install`

* Database creation
From root folder,
`rake db:setup`

* Database initialization
`rake db:seed`

* How to run the test suite
From root folder,
`bundle exec rspec spec/`

* Deployment instructions
Deploy to heroku. Procfiles are already set.

# Start app with
`foreman start -f Procfile.dev`


# Setup Notes
1. bundle install
2. Setup pg, add database.yml with configs with help of database.yml.sample
3. Run rake db:setup
4. Run rake db:seed
5. Run `bundle exec rspec spec/` for running unit, integration tests. (Currently at 99% coverage for backend)
6. Frontend is React. Files can be found under client/ folder.
7. `npm install` within client folder to setup.
8. For deployments, Procfiles for different enviornments are setup. (Heroku)

# Finished
1. Backend done.
2. APIs are available at `http:/localhost:3001`.
3. Currently React, Redux, Redux saga, bootstrap-sass are setup.
4. Watchers for scss precompiling setup.
5. Redux, Redux saga setup for User Registration.
6. Deployment configuration to Heroku.

# Backlog
1. Frontend code and UI.
2. Redux, Redux saga setup for Login, Question, Answer, Rounds and Scoreboard.
3. API integration with frontend.
