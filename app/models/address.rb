class Address < ActiveRecord::Base

  belongs_to :user
  has_one :geo

end
