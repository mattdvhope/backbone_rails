class PagesController < ApplicationController

  # skip_before_filter :verify_authenticity_token, :only => [:index]

  def index
    @users = User.limit(3)
    
    gon.jbuilder "app/views/pages/index.json.jbuilder", as: "users"
  end


end
