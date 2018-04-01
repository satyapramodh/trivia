class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :user

  validates :title, :user, :question, presence: true
  # boolean presence can be validated via below
  # http://guides.rubyonrails.org/active_record_validations.html#presence
  validates :correct, :inclusion => { in: [true, false] }
  validates :correct, exclusion: { in: [nil] }

  def correct?
    correct
  end
end