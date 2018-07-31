class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :ratings, :rating, :rating_value
  end
end
