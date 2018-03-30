FactoryBot.define do
  factory :session do
    user nil
    token Faker::Crypto.sha256
    expired false
  end
end
