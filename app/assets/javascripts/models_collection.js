// This code is a refactoring of the 'models.js' file. Now we're using an actual Backbone 'Collection' constructor.
var App = {
  init: function() {
    this.Items = new ItemsCollection();
    this.Items.fetch();
    this.View = new ItemsView({ collection: this.Items });
    this.Items.sortByName();
  }
};

var ItemModel = Backbone.Model.extend({
  url: function() {
        if (encodeURIComponent(this.id) === "undefined") {
          return "http://localhost:3000/items.json";
        } else {
          return "http://localhost:3000/items/" + encodeURIComponent(this.id) + ".json";
        }
  },
  idAttribute: "id",
  // initialize: function() {
    // this.collection.incrementID(); // Since this 'ItemModel' was created by & w/in a collection, this model now has access to the 'collection' attributes ; it inherits all of its collections methods, including 'incrementID()' in this case.
    // this.set("id", this.collection.last_id);
  // }
});

var ItemsView = Backbone.View.extend({
  el: $("tbody"),

  events: {
    "click a": "removeItem"
  },
  template: Handlebars.compile($("#items").html()),
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON()
    }));
    document.getElementById("focused").focus();   
  },
  removeItem: function(e) {
    e.preventDefault();
    this.collection.sortByProp("id");
    var id_of_latest_item = _.last(this.collection.toJSON()).id
    var data_id_of_red_x = +$(e.target).attr("data-id")
    console.log(id_of_latest_item);
    console.log(data_id_of_red_x);
    var item_id;
    if (data_id_of_red_x === 0) {
      item_id = id_of_latest_item
    } else {
      item_id = data_id_of_red_x
    }
    var model = this.collection.get(item_id);
    model.destroy();
    this.collection.sortByName();
    // this.collection.remove(model);
  },
  initialize: function() {
    this.$el = $("tbody");
    this.listenTo(this.collection, "remove reset rerender", this.render);
    //??? this.listenTo(this.model "destroy", this render); ?????
  }
});

var ItemsCollection = Backbone.Collection.extend({
  url: "http://localhost:3000/items.json",
  last_id: 0,
  model: ItemModel,
  incrementID: function() {
    this.last_id++
  },
  sortByProp: function(prop) {
    // this.models = _(this.models).sortBy(function(m) {
    //   return m.attributes[prop];
    // });
    this.comparator = prop;
    this.sort();
    this.trigger("rerender");
  },
  sortByName: function() {
    this.sortByProp("name");
  },
  initialize: function() {
    this.on("add", this.sortByName);
  }
});

Handlebars.registerPartial("item", $("#item").html());

$("form").on("submit", function(e) {
  e.preventDefault();
  var inputs = $(this).serializeArray(),
      attrs = {};
      item;

  inputs.forEach(function(input) {
    input.value = capitalizeFirstLetter(input.value);
    attrs[input.name] = input.value;
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  App.Items.fetch({
    success: function() {
      var item = new ItemModel(attrs);
      App.Items.add(item);
      item.save(
        null,
        {success: function() {
          console.log(item.toJSON());          
        }}
      );
    }
  });
  this.reset();
});

$("th").on("click", function() {
  var prop = $(this).attr("data-prop");
  App.Items.sortByProp(prop);
});

$("p a").on("click", function(e) {
  e.preventDefault();
  var size = App.Items.size();
  for (var i = 0; i < size; i++) {
    var item = App.Items.pop();
    item.destroy();
  }
  // App.Items.reset(); // Calling collection.reset() without passing any models as arguments will empty the entire collection.
});

App.init();









