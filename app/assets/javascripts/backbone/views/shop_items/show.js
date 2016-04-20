window.ShopItemView = Backbone.View.extend({
  tagName: "tr",

  template: HandlebarsTemplates['shop_items/show'],

  events: {},

  initialize: function() {
    _.bindAll(this, 'render');
    this.model.bind('change', this.render)
  },

  render: function() {
    $(this.el).html(this.template({
      model_name: this.model.get('name')
    }));

    return this;
  }

});