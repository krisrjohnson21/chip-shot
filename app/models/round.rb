class Round < ApplicationRecord
  default_scope { order(created_at: :asc)}

  belongs_to :user

  validates :score, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 30, less_than_or_equal_to: 200 }
  validates :birdies, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 18 }
  validates :pars, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 18 }
  validates :date, presence: true, length: { is: 10, message: "Please enter the date in dd/mm/yyyy format"}
  validates :course, presence: true
end
