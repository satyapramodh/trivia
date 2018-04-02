class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :difficulty, :mode, :answered_count,
    :correct_count, :incorrect_count

  has_many :answers
  has_one :user
end
