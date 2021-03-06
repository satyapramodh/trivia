class Question < ApplicationRecord

  # Constants
  WIN = 4.freeze
  LOSS = -1.freeze
  # validations
  enum difficulty: [:easy, :medium, :hard]
  validates :title, :mode, :user, presence: true
  validates :mode, inclusion: { in: %w(radio text), message: "%{value} is not a valid question type" }
  validate :answers do
    errors.add('answers', "should have at least two answers defined for a choice based question") if mode == "radio" and answers.length < 2
    errors.add('answers', "should have only one answer defined for a text based question") if mode == "text" and answers.length > 1
    errors.add('answers', "should have only one correct answer") if answers.where(correct: true).size > 1
    errors.add('answers', "should have a correct answer") if answers.reject {|answer| !answer.correct? }.size < 1
  end

  # associations
  belongs_to :user
  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers, reject_if: :all_blank, allow_destroy: true

  def correct_answer
    answers.select{|x| x.correct}.first
  end

end
