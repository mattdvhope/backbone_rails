class AlbumsController < ApplicationController

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find_by_title(params[:id]) # "id"=>"Album Title/name"
  end

end
