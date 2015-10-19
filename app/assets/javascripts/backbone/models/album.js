var Album = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.songs_url = "/albums/" + attrs.title;
    attrs.edit_album_path = Routes.edit_album_path(attrs.id);
    return attrs;
  }
});
