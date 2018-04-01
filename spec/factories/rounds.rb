FactoryBot.define do
  factory :round do
    user
    question
    answer
    response { Faker::Lorem.words(2).join(" ") }
    correct false
    round 1
  end
end
