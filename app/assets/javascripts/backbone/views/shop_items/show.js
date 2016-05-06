window.ShopItemView = Backbone.View.extend({
  tagName: "tr",

  template: HandlebarsTemplates['shop_items/show'],

  li_template: HandlebarsTemplates['shop_items/list_item'],

  events: {
    'click .dropdown-toggle': 'render_cat_list_in_dropdown',
  },

  render_cat_list_in_dropdown: function() {
console.log("rendering dropdown-menu???");
    $(this.el).find('.dropdown-menu').empty();
    App.categories.models.forEach(function(cat) {

      var li_template = HandlebarsTemplates['shop_items/list_item']
      $(this.el).find('.dropdown-menu').append(li_template({
        id: cat.toJSON().id,
        name: cat.toJSON().name
      }));
    }, this); // The 'this' at the end causes the 'this' inside of this 'forEach' statement to be the same 'this' that is part of the rest of the app.
  },

  initialize: function() {
    _.bindAll(this, 'render');
    App.categories.fetch();
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    $(this.el).html(this.template({
      model_name: this.model.get('name'),
      cat_name: this.model.get('category') && this.model.get('category').get('name').length > 0 ? this.model.get('category').get('name') : 'no category',
    }));

    this.render_cat_list_in_dropdown();

    return this;
  }

});