//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers



var App = {
  instantiateCategoryView: function() {
    window.categories = new Categories();
    window.categoryView = new CategoryView({ collection: window.categories });
    $("#categorymodal").html(window.categoryView.render().el);

    shopping_list = new ShoppingList()
    shopping_list.bind('all', function() {
      $(".shoppinglist").empty();

      shopping_list.each(function(shop_item) {
        var view = new ShopItemView({ model: shop_item });

        $(".shoppinglist").append(view.render().el);
      }, this);
    });
  },

  init: function() {
    this.instantiateCategoryView();
  }
};

App.init();