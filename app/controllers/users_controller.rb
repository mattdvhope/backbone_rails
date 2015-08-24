class UsersController < ApplicationController

  def index
    @users = User.all
    # gon.users = User.all
    # gon.jbuilder
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    geo = Geo.new(address_params[:geo_attributes])
    address = Address.new(address_params)
    address.geo = geo
    company = Company.new(company_params)
    @user.address = address
    @user.company = company
    @user.save
    redirect_to user_path(@user)
  end

  def update
binding.pry
    # respond_with User .update(params[:id], user_params)
  end

  # def destroy
  #   respond_with User.destroy(params[:id])
  # end

  private

    def user_params
      params.require(:user).permit(:name, :username, :email, :phone, :website)
    end

    def address_params
      params.require(:address_attributes).permit(:street, :suite, :city, :zipcode)
    end

    def company_params
      params.require(:company_attributes).permit(:name, :catchPhrase, :bs)
    end

end
