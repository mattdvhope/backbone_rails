class AddressesController < ApplicationController

  respond_to :json

  def index
    @addresses = Address.all
    respond_with @addresses
  end

  def show
    @address = Address.find(params[:id])
    respond_with @address
  end

  def create
    respond_with Address.create(address_params)
  end

  def update
    respond_with Address.update(params[:id], address_params)
  end

  def destroy
    respond_with Address.destroy(params[:id])
  end

  private

    def address_params
      params.require(:address).permit(:user_id, :street, :suite, :city, :zipcode)
    end

end
