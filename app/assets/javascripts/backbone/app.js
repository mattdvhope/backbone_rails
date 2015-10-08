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
    var songs_modal = new SongsView({ // 'songs_modal' is the album icon w/ its songs/song-lengths listed under it
      collection: songs,
      album: this.selected_album.toJSON()
    });

    songs_modal.render();
    this.songs = songs_modal;
  },
  fetchSongs: function(name) { // used in 'routers/albums.js'
    var songs = new (Songs.extend({ // will extend the current 'songs' collection so that we can specify a url
      url: "/albums/" + name + ".json"
    }))();

    this.selected_album = this.albums.findWhere({ title: name });

    songs.fetch({
      success: this.songsLoaded.bind(this)
    })
  },
  init: function() {
    this.fetchAlbums();
  }
};

var router = new Router();

Backbone.history.start({
  pushState: true, // use 'pushState' to get rid of the '#' in the URL
  silent: true // If the server has already rendered the entire page, and you don't want the initial route to trigger when starting History, pass silent: true.
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();     // "trigger: true" (below) will call the 'route' function in the 'initialize' method
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true } );
});


App.init();







