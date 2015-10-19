var Album = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.songs_url = "/albums/" + attrs.title;
    attrs.edit_album = Routes.edit_album_path(attrs.id);
    attrs.for_album_action = Routes.album_path(attrs.id);
    return attrs;
  }
});
