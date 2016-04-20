window.ShoppingList = Backbone.Collection.extend({

  model: ShopItem,
  url : function() {
    return 'shopitems';
  }

});