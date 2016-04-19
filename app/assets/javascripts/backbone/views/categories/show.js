window.CategoryView = Backbone.View.extend({

  // className: "a-class",
  show_template:HandlebarsTemplates['categories/show'],
  events: {
    'click .close': 'hide',
    'click .delete': 'removeCategory',
    'click .category_add': 'addCategory'
  },
  initialize: function() { // 'initialize' is the constructor of this particular view
    _.bindAll(this, 'render');
    this.collection.fetch();
    this.collection.bind('sync', this.render);
  },

  toggle: function() {
    $("#categorymodal").modal('toggle');
  },

  addCategory: function(e) {
    e.preventDefault();
    this.collection.create({ name: $(this.el).find('.category_name').val() });
    this.collection.fetch();
  },

  removeCategory: function(e) {
    e.preventDefault();
    var id = $(e.target).parents('li').data('id');
    var model = this.collection.where({ id: id })[0];
    this.collection.remove(model);
    if (model) { model.destroy(); }
    this.render();
  },

  render: function() {
    $(this.el).html(this.show_template());

    this.collection.models = this.collection.models.sort(function(a, b) {
        a = a.get('id');
        b = b.get('id');
        if(a > b)
            return 1;
        if(a < b)
            return -1;
        return 0;
    });

    this.collection.models.forEach(function(cat) {
      var li_template = HandlebarsTemplates['categories/single_category']
      $(this.el).find('.categories').append(li_template({
        id: cat.toJSON().id,
        name: cat.toJSON().name
      }));
    }, this); // The 'this' at the end causes the 'this' inside of this 'forEach' statement to be the same 'this' that is part of the rest of the app.

    return this; // to chain methods to 'render()'
  }

});
