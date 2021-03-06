class UserSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :first,
    :last,
    :city,
    :state,
    :handicap,
    :bio,
    :profilePic
  )

  has_many :reviews
  has_many :rounds
  has_many :courses, through: :reviews
end
