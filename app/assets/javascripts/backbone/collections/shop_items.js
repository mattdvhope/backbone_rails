window.ShopItems = Backbone.Collection.extend({

  model: ShopItem,
  url : function() {
    return 'shopitems';
  }

});