class ShopitemsController < ApplicationController

  def index
    @shop_items = ShopItem.all
  end

  def show
    @shop_item = ShopItem.find(params[:id])
  end

  def create
    @shop_item = ShopItem.create(shop_item_params)
    render :nothing => true
  end

  def update
    @shop_item = ShopItem.find(params[:id])
    @shop_item.update(shop_item_params)
    render :nothing => true
  end

  def destroy
    @shop_item = ShopItem.find(params[:id])
    @shop_item.destroy
    render :nothing => true
  end

  private

    def shop_item_params # it's called 'shopitem' rather than 'shop_item' from the Backbone 'save()'
      params.require(:shopitem).permit(:category_id, :version, :name, :purchased)
    end

end