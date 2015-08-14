class User < ActiveRecord::Base

  has_many :posts
  has_one :address
  has_one :company

end
