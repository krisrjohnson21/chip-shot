class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :name, null: false
      t.string :membership, null: false
      t.integer :holes, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :website
      t.string :range, null: false
      t.string :carts, null: false
      t.string :rentals, null: false
      t.string :lessons, null: false

      t.timestamps null: false
    end
  end
end
