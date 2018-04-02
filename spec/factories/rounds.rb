FactoryBot.define do
  factory :round do
    user
    question
    answer nil
    response nil
    correct nil
    round nil

    factory :text_round do
      response { Faker::Lorem.words(2).join(" ") }
    end
  end
end
