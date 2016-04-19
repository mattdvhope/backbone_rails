class Category < ActiveRecord::Base

  has_many :shop_items, dependent: :destroy

end