FactoryBot.define do
  factory :question do
    title { Faker::Lorem.sentence }
    difficulty { [0, 1, 2].sample }
    user
    answered_count 0
    correct_count 0
    incorrect_count 0

    factory :radio_question do
      mode "radio"
      before(:create) do |question|
        question.answers << FactoryBot.build(:answer, user: question.user, question: question, correct: true)
        question.answers << FactoryBot.build(:answer, user: question.user, question: question)
        question.answers << FactoryBot.build(:answer, user: question.user, question: question)
      end
    end

    factory :text_question do
      mode "text"
      before(:create) do |question|
        question.answers << FactoryBot.build(:answer, user: question.user, question: question, correct: true)
      end
    end

  end
end
