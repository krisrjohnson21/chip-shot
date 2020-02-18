class Course < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :name, presence: true
  validates :membership, presence: true
  validates :holes, presence: true, numericality: { only_integer: true }
  validate :number_of_holes
  validates :par, presence: true, numericality: { only_integer: true,
    greater_than_or_equal_to: 30, less_than_or_equal_to: 80 }
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :website, presence: true
  validates :range, presence: true, inclusion: { in: %w(Yes No),
    message: "Please enter either yes or no" }
  validates :carts, presence: true, inclusion: { in: %w(Yes No),
    message: "Please enter either yes or no" }
  validates :rentals, presence: true, inclusion: { in: %w(Yes No),
    message: "Please enter either yes or no" }
  validates :lessons, presence: true, inclusion: { in: %w(Yes No),
    message: "Please enter either yes or no" }
  validates :latitude, presence: true
  validates :longitude, presence: true

  def number_of_holes
    if holes != 9 && holes != 18 && holes != 27 && holes != 36
      errors.add(:holes, "must be 9, 18, 27, or 36")
    end
  end
end
