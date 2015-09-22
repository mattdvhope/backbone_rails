//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

var App = {
  albumsLoaded: function() { },
  fetchAlbums: function() {
    this.albums = new Albums();
    console.log(this.albums);
    this.albums.fetch({
      success: this.albumsLoaded.bind(this)
    });
  },
  init: function() {
    this.fetchAlbums();
  }
};






