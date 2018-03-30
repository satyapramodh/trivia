
FactoryBot.define do

  factory :user do
    name { Faker::Name.unique.name }
    username { "#{name}".split(" ").join("-").downcase }
    email { Faker::Internet.email }
    # encrypted_password Faker::Crypto.sha256
    password "testpassword"
  end
end
