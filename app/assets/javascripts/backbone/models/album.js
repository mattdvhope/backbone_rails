var Album = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.songs_url = "/albums/" + attrs.title;
    attrs.edit_album = Routes.edit_album_path(attrs.id);
    attrs.delete_album = Routes.album_path(attrs.id);
    return attrs;
  }
});
