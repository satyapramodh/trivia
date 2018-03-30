class User < ApplicationRecord
  # create password getter, setter
  attr_accessor :password

  # validations
  validates :username, :email, presence: true
  validates :username, :email, uniqueness: true
  # email regex
  # \A([^@;,`!#$%^&*(){}=\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z
  validates_format_of :email, with: /\A([-+.\w]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  validates :password, :confirmation => true #password_confirmation attr
  validates_length_of :password, :in => 8..20, on: :create

  # callbacks
  before_save :encrypt_password
  after_save :clear_password


  def full_name
    name || username
  end

  def encrypt_password
    if password.present?
      self.salt = BCrypt::Engine.generate_salt
      self.encrypted_password= BCrypt::Engine.hash_secret(password, salt)
    end
  end

  def clear_password
    self.password = nil
  end

  def self.authenticate(username="", login_password="")
    user = User.find_by(username: username)
    if user && user.match_password(login_password)
      return user
    else
      return false
    end
  end

  def match_password(login_password="")
    encrypted_password == BCrypt::Engine.hash_secret(login_password, salt)
  end

end
