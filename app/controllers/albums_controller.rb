class AlbumsController < ApplicationController

  def index
    @album = Album.new
    gon.album = @album
    @albums = Album.all
  end

  def show
    if @album = Album.find_by_title(params[:id]) # "id"=>"Album title"
      @album
    else
      @album = Album.find(params[:id]) # "id"=>"Album id"
    end
  end

  def new
    redirect_to root_path 
  end

  def create
    
  end

end
