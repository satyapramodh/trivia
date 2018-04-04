class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :user

  validates :title, :question, presence: true
  # boolean presence can be validated via below
  # http://guides.rubyonrails.org/active_record_validations.html#presence
  validates :correct, :inclusion => { in: [true, false] }
  validates :correct, exclusion: { in: [nil] }

  before_validation :set_user

  # if user is not set on answer use the one from question
  def set_user
    if self.question.user
      self.user = self.question.user
    end
  end

  def correct?
    correct
  end
end