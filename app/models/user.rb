class User < ApplicationRecord
  # create password getter, setter
  attr_accessor :password

  # associations
  has_many :sessions, dependent: :destroy
  has_many :inactive_sessions, -> { where(expired: true) }, class_name: "Session"
  has_many :active_sessions, -> { where(expired: false) }, class_name: "Session"
  # TODO: #future should you delete questions/answers created by user?
  has_many :created_questions, class_name: "Question", dependent: :destroy
  has_many :created_answers, class_name: "Answer", dependent: :destroy
  has_many :rounds, dependent: :destroy


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

  # password and authentication management
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

  # session management
  def end_current_session token
    active_sessions.find_by(token: token).end
  end

  def end_all_sessions
    active_sessions.update_all(expired: true)
  end

  def get_weekly_score
    compute_scores rounds.this_week
  end

  def get_total_score
    compute_scores rounds
  end

  # TODO: save this value on user
  def compute_scores results
    wins = results.answered_correct.count
    loss = results.answered_wrong.count
    total = wins * Question::WIN + loss * Question::LOSS
    return (total < 0 ? 0 : total)
  end
end
