class Event < ApplicationRecord
  has_many :ratings, dependent: :destroy
  belongs_to :city
end
