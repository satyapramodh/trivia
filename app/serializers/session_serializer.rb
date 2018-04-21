class SessionSerializer < ActiveModel::Serializer
  attributes :token, :name, :id, :username

  def name
    object.user.name
  end

  def username
    object.user.username
  end
end
