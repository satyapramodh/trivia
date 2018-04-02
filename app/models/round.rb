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

  before_validation :set_defaults
  after_validation :update_response
  # after_commit :update_score

  def set_defaults
    self.round = 0 if self.round.nil?
  end

  def update_response
    return false unless self.errors.empty?
    send "validate_#{question.mode}_answer"
  end

  def validate_text_answer
    ans = question.answers.first
    self.response = self.response.downcase
    self.correct = (self.response == ans.title.downcase)
  end

  def validate_radio_answer
    ans = question.answers.select{|x| x.correct}.first
    self.correct = (answer == ans)
  end

  # def update_score
  #   # %U - Week number of the year. The week starts with Sunday. (00..53)
  #   # %W - Week number of the year. The week starts with Monday. (00..53)
  #   week = Time.now.strftime("%W").to_i
  #   year = Time.now.year
  # end
end

