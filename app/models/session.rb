class Session < ApplicationRecord
  belongs_to :user

  validates :user, :token, :expired, presence: true
  validates_uniqueness_of :token

end
