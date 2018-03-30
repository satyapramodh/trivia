FactoryBot.define do
  factory :answer do
    title { Faker::Lorem.words(2).join(" ") }
    question
    user
    answered_count 1
    correct false
  end
end
