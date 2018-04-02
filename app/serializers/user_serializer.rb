class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username

  def name
    object.name || object.username
  end
end
