class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :catch_phrase
      t.string :bs

      t.timestamps null: false
    end
  end
end
