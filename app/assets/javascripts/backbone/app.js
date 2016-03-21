//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers







////////// Albums App //////////////////////
// var App = {
//   $el: $("main"),
//   albumsLoaded: function() {
//     this.view.render();
//   },
//   fetchAlbums: function() {
//     this.albums = new Albums(); // in 'collections/albums.js', it will instantiate each 'Album' model, populating each model with data from the url, "/albums.json"
//     this.view = new AlbumsView({ collection: this.albums }); // it will populate this newly instantiated View's native 'collection' attribute with the collection ('this.albums') immediately defined above
//     this.albums.fetch({
//       success: this.albumsLoaded.bind(this)
//     });
// console.log(this.albums);
// console.log(this.albums.findWhere({ title: name }));
//   },
//   createCart: function() {
//     this.cart = new CartItems();
//     this.cart.view = new CartView({
//       collection: this.cart
//     });
//   },
//   songsLoaded: function(songs) {
//     var songs_modal = new SongsView({
//       collection: songs, // Do I need this?? Seems to work w/o this in views/songs/index.js
//       album_obj: this.selected_album,
//       album_json: this.selected_album.toJSON()
//     });

//     songs_modal.render();

//     this.songs = songs_modal;
//   },
//   fetchSongs: function(name) { // used in 'routers/albums.js'
//     var songs = new (Songs.extend({ // will extend the current 'Songs' collection so that we can specify a url
//       url: "/albums/" + name + ".json"
//     }))();
// console.log(this.albums);

//     this.selected_album = this.albums.findWhere({ title: name });
// console.log(this.selected_album);

//     songs.fetch({
//       success: this.songsLoaded.bind(this)
//     })
//   },
//   getNewAlbumForm: function() {
//     var new_form_modal = new NewAlbumView();
//     new_form_modal.render();

//     this.new_form = new_form_modal;
//   },
//   bindEvents: function() {
//     _.extend(this, Backbone.Events);
//     // this.listenTo(this.index, "add_album", this.getNewAlbumForm);
//     // this.on("add_to_cart", this.cart.addItem()); // 'add_to_cart' in 'albums/show.js' ... 'addItem' method in 'collections/cart_item.js'
//   },
//   init: function() {
//     this.fetchAlbums();
//     this.createCart();
//     this.bindEvents();
//   }
// };

// var router = new Router();

// Backbone.history.start({
//   pushState: true, // use 'pushState' to get rid of the '#' in the URL
//   silent: true // If the server has already rendered the entire page, and you don't want the initial route to trigger when starting History, pass silent: true.
// });

// $(document).on("click", "a[href^='/']", function(e) {
//   e.preventDefault();     // "trigger: true" (below) will call the 'route' function in the 'initialize' method
//   router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true } );
// });                // currentTarget is a jQuery method


// Handlebars.registerHelper("format_price", function(price) {
//   return (+price).toFixed(2);
// });


// App.init();





