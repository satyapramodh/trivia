class Question < ApplicationRecord
  belongs_to :user
  has_many :answers

  enum difficulty: [:easy, :medium, :hard]

  validates :title, :mode, :user, presence: true
  validates :mode, inclusion: { in: %w(radio text), message: "%{value} is not a valid question type" }
end
