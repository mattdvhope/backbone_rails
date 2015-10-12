var Router = Backbone.Router.extend({
  routes: {
    "albums/new": "newAlbum",
    "albums/:name": "getAlbum"
  },
  getAlbum: function(name) {
    App.fetchSongs(name); // 'fetchSongs' method in 'app.js'
  },
  newAlbum: function() {
    var newLp = new Album()
    console.log(newLp);
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

