class Round < ApplicationRecord
  belongs_to :user
  belongs_to :course

  validates :score, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 30, less_than_or_equal_to: 200 }
  validates :birdies, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 18 }
  validates :pars, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 18 }
end
