//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

var App = {
  albumsLoaded: function() {
    this.view.render();
  },
  fetchAlbums: function() {
    this.albums = new Albums();
    this.view = new AlbumsView({ collection: this.albums });
    this.albums.fetch({
      success: this.albumsLoaded.bind(this)
    });
  },
  songsLoaded: function(songs) {
    var songs_modal = new SongsView({
      collection: songs,
      album: this.selected_album.toJSON()
    });

    songs_modal.render();
    this.songs = songs_modal;
  },
  fetchSongs: function(name) {
    var songs = new (Songs.extend({ // will extend the current 'songs' collection so that we can specify a url
      url: "/albums/" + name + ".json"
    }))();

    this.selected_album = this.albums.findWhere({ name: name });

    songs.fetch({
      success: this.songsLoaded.bind(this)
    })
  },
  init: function() {
    this.fetchAlbums();
  }
};

var Router = Backbone.Router.extend({
  routes: {
    "albums/:name": "getAlbum"
  },
  getAlbum: function(name) {
    App.fetchSongs(name);
  },
  index: function() {
    if (!App.songs.$el.is(":animated")) {
      App.songs.fadeOut();
    }
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index);
  }
});

var router = new Router();

Backbone.history.start({
  pushState: true,
  silent: true
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault(); // "trigger: true" (below) will call the 'route' function in the 'initialize' method
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true } );
});


App.init();







