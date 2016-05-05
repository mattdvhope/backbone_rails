//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

var App = {
  instantiateCategoriesView: function() {
    this.categories = new Categories();
    this.categoriesView = new CategoriesView({ collection: this.categories });
    $("#categorymodal").html(this.categoriesView.render().el);

    app_shopping_list = new ShoppingList()
    app_shopping_list.bind('sync', function() {
      $(".shoppinglist").empty();

      app_shopping_list.each(function(shop_item) {
        var view = new ShopItemView({ model: shop_item, categories: this.categories });
console.log(view.model.get('category') && view.model.get('category').get('name').length > 0 ? view.model.get('category').get('name') : 'no category');
console.log(shop_item.toJSON());
console.log(view.model.get('category'));

        $(".shoppinglist").append(view.render().el);
      }, this);
    });
  },
  fetch_app_shopping_list: function() {
    app_shopping_list.fetch();
  },
  init: function() {
    this.instantiateCategoriesView();
    this.fetch_app_shopping_list();
  }
};

App.init();

