var ItemModel = Backbone.Model.extend({
  idAttribute: "id"
});

var Items = {
  $body: $("tbody"),
  collection: [],
  create: function(item_data) {
    item_data.id = this.collection.length + 1; // gives "data-id" an actual id number
    var item = new ItemModel(item_data);

    this.collection.push(item);

    return item;
  },
  render: function() {
    this.$body.html(template({
      items: this.collection
    }));
  },
  seedCollection: function() { // to seed with 'items_json' from the <script> template
    items_json.forEach(this.create.bind(this)); // 'bind' to make the 'Items' object the context
  },
  remove: function(e) { // using 'init' below, we will 'bind()' this callback to the click event
    e.preventDefault();
    var $e = $(e.currentTarget),
        model = _(this.collection).findWhere({ id: +$e.attr("data-id") });

    this.collection = _(this.collection).without(model);
    this.render();
  },
  bind: function() {
    this.$body.on("click", "a", this.remove.bind(this));
  },
  init: function() {
    this.seedCollection();
    this.render();
    this.bind(); // we'll bind the click event to the table
  }
};

var template = Handlebars.compile($("#items").html());

Handlebars.registerPartial("item", $("#item").html());

Items.init();










