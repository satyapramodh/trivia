class Question < ApplicationRecord
  belongs_to :user
  has_many :answers, dependent: :destroy

  enum difficulty: [:easy, :medium, :hard]

  validates :title, :mode, :user, presence: true
  validates :mode, inclusion: { in: %w(radio text), message: "%{value} is not a valid question type" }

  # handle question and answer validations in the model/controller
  # every question must have atleast one correct answer
  # every radio question must have atleast 2 answer options

end
