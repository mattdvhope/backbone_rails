var $overlay = $("#overlay");

var SongsView = Backbone.View.extend({
  attributes: { // set of HTML attributes added to the parent view element
    id: "songs_modal"
  },
  events: { // specify an 'events' object to activate 'Close' link
    "click a.close": "close" // when 'a.close' is clicked, the 'close' method (below) is called
  },
  duration: 300,
  template:  HandlebarsTemplates['songs/index'],
  open: function () {
    this.$el.add($overlay).fadeIn(this.duration); // 'add' just makes them into one new jQuery object ; from docs: "Do not assume that this method appends the elements to the existing collection in the order they are passed to the .add() method."... the resulting collection from .add() will be sorted in document order...
  },
  close: function(e) {
    e.preventDefault();
    this.fadeOut();
    history.back();
  },
  fadeOut: function() {
    $overlay.fadeOut(this.duration); // these fadeOut's are separate b/c we still want to keep the overlay for future use
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this)); // must bind this fadeOut to the 'SongsView' context
  },
  render: function() {
    this.$el.html(this.template({
      songs: this.album.songs,
      album: this.album
    }));
    this.open(); // to fade the overlay in...
  },
  initialize: function(options) { // need to accept this 'options' argument b/c Backbone will only assign these attributes to the view instance when they are a model or a collection...won't know what to do otherwise
    this.album = options.album; //'options' here are from 'app.js'...the 'collection' and 'album' from when 'new SongsView()' is instantiated
    this.$el.appendTo(document.body); // 'this.$el' by default is a '<div>' element
  }
});





