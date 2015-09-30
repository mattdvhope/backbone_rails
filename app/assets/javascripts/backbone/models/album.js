var Album = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.songs_url = "/albums/" + attrs.title;
    return attrs;
  }
});
