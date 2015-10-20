var CartView = Backbone.View.extend({
  template:  HandlebarsTemplates['cart/index'],
  el: $("#cart").get(0),
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(), // from 'collections/cart_items.js'
      items: this.collection.toJSON(),
      total: this.collection.getTotal() // from 'collections/cart_items.js'
    }));
  },
  initialize: function() {
    this.render();
  }
});

