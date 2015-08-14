class CreateGeos < ActiveRecord::Migration
  def change
    create_table :geos do |t|
      t.string :lat
      t.string :lng

      t.timestamps null: false
    end
  end
end
