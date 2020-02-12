class CourseSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :name,
    :membership,
    :holes,
    :par,
    :address,
    :city,
    :state,
    :website,
    :range,
    :carts,
    :rentals,
    :lessons,
    :url
  )

  has_many :reviews
  has_many :rounds
end
