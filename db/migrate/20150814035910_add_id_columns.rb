class AddIdColumns < ActiveRecord::Migration
  def change
    add_column :companies, :user_id, :integer
    add_column :addresses, :user_id, :integer
    add_column :geos, :address_id, :integer
  end
end
