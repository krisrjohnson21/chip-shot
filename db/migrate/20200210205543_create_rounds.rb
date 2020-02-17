class CreateRounds < ActiveRecord::Migration[5.2]
  def change
    create_table :rounds do |t|
      t.integer :score, null: false
      t.integer :birdies, null: false
      t.integer :pars, null: false

      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
