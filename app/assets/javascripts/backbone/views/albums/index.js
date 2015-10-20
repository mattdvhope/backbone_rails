var AlbumsView = Backbone.View.extend({
  template:  HandlebarsTemplates['albums/index'],
  render: function() {
    this.$el.html(this.template({ albums: this.collection.toJSON() }));
  },
  initialize: function() {
    this.$el = $("#albums");
    this.listenTo(this.collection, "change", this.render);
  }
});

