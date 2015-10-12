class AlbumsController < ApplicationController

  protect_from_forgery except: :create

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
    redirect_to root_path # in case of page-refresh
  end

  def create
    @album = Album.new
binding.pry
    @album.assign_attributes(params)
    # @album.artist = params[:artist]
    # @album.title = params[:title]
    # @album.url = params[:url]
    # @album.date = params[:date]
    # @album.cover = params[:cover]
    # @album.price = params[:price].to_i
    # @album.save
  end

  private

    def album_params
      params.require(:album).permit(:artist, :title, :url, :date, :cover, :price)
    end

end
