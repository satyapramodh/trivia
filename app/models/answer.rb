class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :user

  validates :title, :user, :question, :correct, presence: true

  def correct?
    correct
  end
end