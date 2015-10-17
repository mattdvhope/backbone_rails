class AlbumsController < ApplicationController



  def index
    # gon.album = Album.new
    @albums = Album.all # goes to jbuilder
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
    @album = Album.new(album_params)
    if @album.save
      redirect_to root_path
    else
      flash[:danger] = "You were not able to make a new Album."
      redirect_to root_path
    end
  end

  def edit
    
  end

  def update
    
  end

  private

    def album_params
      params.require(:album).permit(:artist, :title, :url, :date, :cover, :price)
    end

end
