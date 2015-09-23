var AlbumsView = Backbone.View.extend({
  template: Handlebars.compile($("[data-name=albums]").html()),
  render: function() {
    this.$el.html(this.template({ albums: this.collection.toJSON() }));
  },
  initialize: function() {
    this.$el = $("#albums"); // overriding the '$el' default, <div>
    this.listenTo(this.collection, "change", this.render); // any change to the collection causes us to re-render the page
  }
});