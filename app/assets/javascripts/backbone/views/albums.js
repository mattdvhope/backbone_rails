var AlbumsView = Backbone.View.extend({
  template: Handlebars.compile($("[data-name=albums]").html()), // '.html()' causes it (the <script> tag) to take it's html (string) contents and to pass them into the compiler
  render: function() {
    this.$el.html(this.template({ albums: this.collection.toJSON() })); // 'albums' here is the 'albums' that we'll use in the Handlebars 'each' loop in the html page
  },  // $el is the current jQuery object that represents the view, in this case a <div> (default) at this moment
  initialize: function() {
    this.$el = $("#albums"); // overriding the '$el' default '<div>' here to the '<ul>' on the page
    this.listenTo(this.collection, "change", this.render); // any change to the collection causes us to re-render the page
  }
});