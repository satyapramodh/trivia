FactoryBot.define do
  factory :session do
    user
    token nil
    expired false
  end
end
