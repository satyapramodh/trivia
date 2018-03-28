FactoryBot.define do
  factory :question do
    title "MyString"
    difficulty 1
    mode "MyString"
    user nil
    answered_count 1
    correct_count 1
    incorrect_count 1
  end
end
