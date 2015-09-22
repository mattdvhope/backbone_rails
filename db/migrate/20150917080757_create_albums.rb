class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :artist
      t.string :title
      t.string :url
      t.string :date
      t.string :cover
      t.timestamps null: false
    end
  end
end
