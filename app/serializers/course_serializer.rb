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
    :url,
    :latitude,
    :longitude
  )

  has_many :reviews
end
