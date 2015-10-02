class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title
      t.string :console
      t.integer :release_year
      t.string :upc
      t.string :genre
      t.string :cover

      t.timestamps null: false
    end
  end
end
