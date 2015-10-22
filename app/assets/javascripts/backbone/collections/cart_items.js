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
  readStorage: function() {
    stored_cart = JSON.parse(localStorage.getItem("cart")); // we need to take 'localStorage.getItem("cart")' from a string and turn it into a javascript object
    this.reset(stored_cart); // we'll reset this collection with the 'stored_cart' data
    this.setTotalPrice().setCartQuantity();
  },
  updateStorage: function() {
    localStorage.setItem("cart", JSON.stringify(this.toJSON())); // we need to convert this collection into a string
  },
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
    this.update();
    this.trigger("cart_updated");
  },
  destroy: function(id) {
    this.remove(id);
    this.update();
  },
  update: function() {
    this.setTotalPrice().setCartQuantity().updateStorage();
  },
  initialize: function() {
    this.readStorage()
    this.on("destroy", this.destroy);
  }
});



