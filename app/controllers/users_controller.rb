class UsersController < ApplicationController

  respond_to :json
  respond_to :html

  def index
    @users = User.all
    respond_with @users
  end

  def show
    @user = User.find(params[:id])
    respond_with @user
  end

  def create
    respond_with User.create(user_params)
  end

  def update
    respond_with User.update(params[:id], user_params)
  end

  def destroy
    respond_with User.destroy(params[:id])
  end

  private

    def user_params
      params.require(:user).permit(:title, :body)
    end

end
