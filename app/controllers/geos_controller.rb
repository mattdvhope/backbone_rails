class GeosController < ApplicationController

  # respond_to :json, :html

  def index
    @geos = Geo.all
  end

  def show
    @geo = Geo.find(params[:id])
  end

  def create
    respond_with Geo.create(geo_params)
  end

  def update
    respond_with Geo.update(params[:id], geo_params)
  end

  def destroy
    respond_with Geo.destroy(params[:id])
  end

  private

    def geo_params
      params.require(:geo).permit(:address_id, :lat, :lng)
    end

end
