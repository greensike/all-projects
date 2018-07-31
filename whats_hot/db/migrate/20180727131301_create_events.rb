class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.string :address
      t.string :description
      t.date :date
      t.string :photo_url
      t.references :city, foreign_key: true

      t.timestamps
    end
  end
end
