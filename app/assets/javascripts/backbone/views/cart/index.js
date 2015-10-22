var CartView = Backbone.View.extend({
  template:  HandlebarsTemplates['cart/index'],
  el: $("#cart").get(0),
  events: {
    "click a.remove": "destroy"
  },
  destroy: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    this.collection.trigger("destroy", +$e.attr("data-id"));
    this.render();
  },
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(), // cart's total quantity
      items: this.collection.toJSON(),
      total: this.collection.getTotalPrice() // price-total of every item in cart
    }));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cart_updated", this.render);
  }
});

