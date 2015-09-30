var $overlay = $("#overlay");

var SongsView = Backbone.View.extend({
  duration: 300,
  template:  HandlebarsTemplates['songs/each_song'],
  open: function () {
    this.$el.add($overlay).fadeIn(this.duration);
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
      // songs: this.collection.toJSON(),
      songs: this.collection.models[0].toJSON().songs,
      album: this.album
    }));
    this.open(); // to fade the overlay in...
  },
  initialize: function(options) { // need to accept this 'options' argument b/c Backbone will only assign these attributes to the view instance when they are a model or a collection...won't know what to do otherwise
    this.album = options.album;
    this.$el.appendTo(document.body);
  }
});





