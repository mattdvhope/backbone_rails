var AlbumsView = Backbone.View.extend({ // 'this' is a Backbone View constructor
  template:  HandlebarsTemplates['albums/index'],
  render: function() { // 'this.$el' is '<ul id="albums">' in app/views/albums/index.html.erb
    this.$el.html(this.template({ albums: this.collection.toJSON(), edit_album_path: Routes.edit_album_path(1) })); // 'albums' here is the 'albums' that we'll use in the Handlebars 'each' loop in the html page
  },  // $el is the current jQuery object that represents the view, in this case a <div> (default) at this moment
  initialize: function() { // when 'new AlbumsView()' is instantiated, 'this.$el' is defined here...
    this.$el = $("#albums"); // overriding the '$el' default '<div>' here to the '<ul>' in 'app/views/albums/index.html.erb'
    this.listenTo(this.collection, "change", this.render); // any change to the collection causes us to re-render the page
  }
});

