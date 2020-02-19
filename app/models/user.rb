class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :reviews
  has_many :rounds
  has_many :courses, through: :reviews

  validates :first, presence: true
  validates :last, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :handicap, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 75 }
  validates :bio, presence: true

  mount_uploader :profile_photo, ProfilePhotoUploader

  def profilePic
    "#{self.profile_photo.url}"
  end
end
