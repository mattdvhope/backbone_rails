class AddShopItems < ActiveRecord::Migration
  def change
    create_table :shop_items do |t|
      t.integer :category_id
      t.integer :version
      t.string :name
      t.boolean :purchased

      t.timestamps null: false
    end
  end
end
