class ChangeRatingsTypeInRatings < ActiveRecord::Migration[5.2]
  def self.up
    change_column :ratings, :rating, :string
    end
    def self.down
    change_column :ratings, :rating, :integer
    end
end

