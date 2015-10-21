var CartItems = Backbone.Collection.extend({
  setTotalPrice: function() {
    this.total = this.toJSON().reduce(function(a, b) {
      return a + +b.price * b.item_quantity;
    }, 0);

    return this; // to allow for method-chaining below
  },
  getTotalPrice: function() { return this.total; },
  setCartQuantity: function() {
    this.quantity = this.toJSON().reduce(function(a, b) {
      return a + b.item_quantity;
    }, 0);

    return this; // to allow for method-chaining below
  },
  getQuantity: function() { return this.quantity; },
  addItem: function(item) {
    var existing = this.get(item.get("id")); // to check if item is already in 'this' collection or not
    if (existing) {
      existing.set("item_quantity", existing.get("item_quantity") + 1);
      existing.set("price_multiplied", existing.get("item_quantity") * +existing.get("price"))
    } else {
      existing = item.clone();
      existing.set("item_quantity", 1);
      existing.set("price_multiplied", +existing.get("price"))
      this.add(existing);
    }
    this.setTotalPrice().setCartQuantity();
    this.trigger("cart_updated");
  }
});



