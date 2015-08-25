class ItemsController < ApplicationController

  def index
    @items = Item.all
  end

  def show
    @item = Item.find(params[:id])
  end

  def create
    @item = Item.new(item_params)
    @item.save
    redirect_to item_path(@item)
  end

  def destroy
# binding.pry
    @item = Item.find(params[:id])
    @item.destroy
  end

  private

    def item_params
      params.require(:item).permit(:name, :quantity)
    end

end
