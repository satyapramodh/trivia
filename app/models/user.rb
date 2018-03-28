class User < ApplicationRecord
  validates :username, :email, :encrypted_password, presence: true
  validates :username, :email, uniqueness: true
end
