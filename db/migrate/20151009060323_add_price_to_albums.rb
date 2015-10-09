class AddPriceToAlbums < ActiveRecord::Migration
  def change
    add_column :albums, :price, :integer
  end
end
