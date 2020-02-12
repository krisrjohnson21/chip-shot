class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :user_id, :userFullName, :course_id

  belongs_to :user
  belongs_to :course
end
