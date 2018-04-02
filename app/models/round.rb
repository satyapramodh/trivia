class Round < ApplicationRecord
  belongs_to :user
  belongs_to :question
  # In rails 5 belongs_to is required by default
  # https://stackoverflow.com/a/36330921/1124639
  belongs_to :answer, optional: true

  validates :user, :question, presence: true
  validate :response do
    errors.add(:response, "Rresponse should not be empty for a text based question") if response.nil? and question and question.mode == "text"
  end

  validate :answer do
    errors.add(:answer, "Answer should not be empty for a choice based question") if answer.blank? and question and question.mode == "radio"
  end

  before_validation :set_defaults, :update_response

  def set_defaults
    self.round = 0 if self.round.nil?
  end

  def update_response
    send "validate_#{question.mode}_answer" if question
  end

  def validate_text_answer
    return false if self.response.nil?
    ans = question.answers.first
    self.response = self.response.downcase
    self.correct = (self.response == ans.title.downcase)
  end

  def validate_radio_answer
    ans = question.answers.select{|x| x.correct}.first
    self.correct = (answer == ans)
  end

end

