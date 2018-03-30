class User < ApplicationRecord
  validates :username, :email, :encrypted_password, presence: true
  validates :username, :email, uniqueness: true

  # email regex
  # \A([^@;,`!#$%^&*(){}=\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z
  validates_format_of :email, with: /\A([-+.\w]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  def full_name
    name || username
  end
end
