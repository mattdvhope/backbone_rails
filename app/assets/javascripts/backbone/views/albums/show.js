var AlbumView = Backbone.View.extend({
  tagName: "li",
  template:  HandlebarsTemplates['albums/show'],
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});