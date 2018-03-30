class Session < ApplicationRecord
  # associations
  belongs_to :user

  # validations
  validates :user, :token, presence: true
  validates_uniqueness_of :token
  validates :token, length: { minimum: 10 }

  include Tokenable

  before_validation :create_active_session, on: :create

  def create_active_session
    self.generate_token unless self.token and self.token.length > 0
  end

  def end
    update expired: true
  end

  def active_session_user
    self.user unless expired
  end

end
