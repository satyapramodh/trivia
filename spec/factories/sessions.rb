FactoryBot.define do
  factory :session do
    user
    token Faker::Crypto.sha256
    expired false
  end
end
