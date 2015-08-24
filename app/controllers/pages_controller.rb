class PagesController < ApplicationController

  # skip_before_filter :verify_authenticity_token, :only => [:index]

  def index
    @users = User.all
#     gon.jbuilder "app/views/pages/index.json.jbuilder", as: "users"
  end


end
