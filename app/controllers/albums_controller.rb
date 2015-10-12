class AlbumsController < ApplicationController

  def index
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
    @album = Album.new
  end

  def create
    
  end

end
