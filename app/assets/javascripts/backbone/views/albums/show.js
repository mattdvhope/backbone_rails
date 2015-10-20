var AlbumView = Backbone.View.extend({
  tagName: "li",
  template:  HandlebarsTemplates['albums/show'],
  render: function() {
    var id = this.model.get("id")

    this.$el.attr("id", "album_" + id);
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find("ul"));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});