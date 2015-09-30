var Router = Backbone.Router.extend({
  routes: {
    "albums/:name": "getAlbum"
  },
  getAlbum: function(name) {
    App.fetchSongs(name);
  },
  index: function() {
    if (!App.songs.$el.is(":animated")) { // ':animated' (a jQuery pseudo-selector) here refers to 'faded in' ('fadeIn' is currently in operation)
      App.songs.fadeOut();
    }
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index); // listening for a path that starts with a '/' which will be our 'index' & we'll call the current 'index' method in 'Router'
  }
});

