window.CategoryView = Backbone.View.extend({

  className: "a-class",
  show_template:HandlebarsTemplates['categories/show'],
  events: {
    'click .close': 'hide',
    'click .delete': 'removeCategory',
    'click .category_add': 'addCategory'
  },
  initialize: function() { // 'initialize' is the constructor of this particular view
    _.bindAll(this, 'render', 'removeCategory', 'addCategory');
    this.collection.fetch();
    this.collection.bind('all', this.render);
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
    model.destroy();
  },

  sort_list_items: function() {
    $(".categories li").sort(sort_li)
      .appendTo('.categories');
    function sort_li(a, b){
      return ($(b).data('id')) < ($(a).data('id')) ? 1 : -1;    
    }
  },

  render: function() {
    $(this.el).html(this.show_template());

    this.collection.each(function(cat) {
      var li_template = HandlebarsTemplates['categories/single_category']

      $(this.el).find('.categories').append(li_template({
        id: cat.get('id'),
        name: cat.get('name')
      }));

    }, this); // The 'this' at the end causes the 'this' inside of this 'each' statement to be the same 'this' that is part of the rest of the app.

    this.sort_list_items();

    return this; // to chain methods to 'render()'
  }

});
