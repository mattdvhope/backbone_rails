window.ShopItem = Backbone.Model.extend({

  urlRoot: "shopitems",

  defaults: function() {
    return {
      purchased: false
    };
  },

});
