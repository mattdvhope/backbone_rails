class CategoriesController < ApplicationController

  def index
    @categories = Category.all
  end

  def show
    @category = Category.find(params[:id])
  end

  def create
    @category = Category.create(category_params)
    render :nothing => true
  end

  def update
    @category = Category.find(params[:id])
    @category.update(category_params)
    render :nothing => true
  end

  def destroy
    @category = Category.find(params[:id])
# binding.pry
    @category.destroy
# binding.pry
    render :nothing => true
  end

  private

    def category_params
      params.require(:category).permit(:name)
    end


end
