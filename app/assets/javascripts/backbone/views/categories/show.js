window.CategoryView = Backbone.View.extend({

  handle_bars_template:HandlebarsTemplates['categories/show'],
  events: {
    'click .delete': 'removeCategory'
  },
  initialize: function() { // 'initialize' is the constructor of this particular view
    _.bindAll(this, 'render', 'removeCategory');
    this.collection.fetch();
    this.collection.bind('all', this.render);
  },

  removeCategory: function(e) {
    e.preventDefault();
    var id = $(e.target).parents('li').data('id');
    var model = this.collection.where({ id: id })[0];
    console.log(model.toJSON());
  },

  render: function() {
    $(this.el).html(this.handle_bars_template());
    this.collection.each(function(cat) {
      var li_template = HandlebarsTemplates['categories/single_category']

      $(this.el).find('.categories').append(li_template({
        id: cat.get('id'),
        name: cat.get('name')
      }));

    }, this); // The 'this' at the end causes the 'this' inside of this 'each' statement to be the same 'this' that is part of the rest of the app.

    return this;
  }

});
