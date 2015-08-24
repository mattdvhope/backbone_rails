class User < ActiveRecord::Base

  has_many :posts, :dependent => :destroy
  has_one :address, :dependent => :destroy
  has_one :company, :dependent => :destroy

end
