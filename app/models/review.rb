class Review < ApplicationRecord
  default_scope { order(created_at: :desc)}

  belongs_to :user
  belongs_to :course

  validates :rating, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
  validates :body, presence: true

  def userFullName
    "#{self.user.first} #{self.user.last}"
  end
end
