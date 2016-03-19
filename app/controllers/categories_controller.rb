class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    @category = Category.find(params[:id])
  end

  def create
binding.pry
    @category = Category.create(category_params)
binding.pry
    redirect_to :back
  end

  private

    def category_params
      params.require(:category).permit(:name)
    end


end
