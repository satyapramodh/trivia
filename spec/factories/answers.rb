FactoryBot.define do
  factory :answer do
    title { Faker::Lorem.words(2).join(" ") }
    question
    user
    answered_count 0
    correct false
  end
end
