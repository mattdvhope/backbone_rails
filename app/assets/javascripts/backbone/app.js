//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

var App = {
  instantiateCategoryView: function() {
    this.categories = new Categories();
    this.categoryView = new CategoryView({ collection: this.categories });
    $("#categorymodal").html(this.categoryView.render().el);

    app_shopping_list = new ShoppingList()
    app_shopping_list.bind('sync', function() {
      $(".shoppinglist").empty();

      app_shopping_list.each(function(shop_item) {
        var view = new ShopItemView({ model: shop_item, categories: this.categories });

        $(".shoppinglist").append(view.render().el);
      }, this);
    });
  },
  fetch_app_shopping_list: function() {
    app_shopping_list.fetch();
  },
  init: function() {
    this.instantiateCategoryView();
    this.fetch_app_shopping_list();
  }
};

App.init();

