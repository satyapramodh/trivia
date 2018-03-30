FactoryBot.define do
  factory :question do
    title { Faker::Lorem.paragraph }
    difficulty { [0, 1, 2].sample }
    mode { %w(radio text).sample }
    user
    answered_count 1
    correct_count 1
    incorrect_count 1

    trait :radio do
      mode "radio"
    end

    trait :text do
      mode "text"
    end

    trait :radio_answers do

    end

    trait :text_answers do
    end
  end
end
