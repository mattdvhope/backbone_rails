var $overlay = $("#overlay");

var newAlbumView = Backbone.View.extend({
  attributes: {
    id: "new_album_modal"
  },
  events: {
    "click a.close": "close"
  },
  duration: 300,
  template:  HandlebarsTemplates['albums/new'],
  open: function () {
    this.$el.add($overlay).fadeIn(this.duration);
  },
  close: function(e) {
    e.preventDefault();
    this.fadeOut();
    history.back();
  },
  fadeOut: function() {
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },
  render: function() {
    this.$el.html(this.template());
    this.open(); // to fade the overlay in...
  },
  initialize: function() {
    this.$el.appendTo(document.body);
  }
});





