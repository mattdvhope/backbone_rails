window.ShopItemView = Backbone.View.extend({
  tagName: "tr",

  template: HandlebarsTemplates['shop_items/show'],

  li_template: HandlebarsTemplates['shop_items/list_item'],

  events: {},

  initialize: function() {
    _.bindAll(this, 'render');
    this.model.bind('change', this.render);
  },

  render: function() {
    $(this.el).html(this.template({
      model_name: this.model.get('name'),
      item_name: this.model.get('category') && this.model.get('name').length > 0 ? this.model.get('category').get('name') : 'no category'
    }));

      categories: if (App.categories != undefined) {
        App.categories.each(function(c) {
          $('.dropdown-menu').append(
            this.li_template({
              cat_id: c.get('id'),
              cat_name: c.get('name')
            })
          )
        }, this);
      }


    return this;
  }

});