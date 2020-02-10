class Course < ApplicationRecord
  has_many :reviews
  has_many :rounds
  has_many :users, through: :rounds

  validates :name, presence: true
  validates :membership, presence: true
  validates :holes, presence: true, numericality: { only_integer: true }
  validate :number_of_holes
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

  def number_of_holes
    if holes != 9 && holes != 18
      errors.add(:holes, "must be 9 or 18")
    end
  end
end
