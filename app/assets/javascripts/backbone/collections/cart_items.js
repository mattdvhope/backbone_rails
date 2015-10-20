var CartItems = Backbone.Collection.extend({
  setTotal: function() {
    this.total = this.toJSON().reduce(function(a, b) {
      return a + b.price * b.quantity;
    }, 0);
  },
  getTotal: function() { return this.total; },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(a, b) {
      return a + b.quantity;
    }, 0);
  },
  getQuantity: function() { return this.quantity; },
  addItem: function(item) {
    var item = item.clone();
    item.set("quantity", 1);
console.log(this.toJSON());
    this.add(item);
console.log(this.toJSON());
    this.setTotal();
// console.log(this.quantity);
    this.setQuantity();
// console.log(this.quantity);
  }
});
