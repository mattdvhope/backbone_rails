var Album = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.songs_url = "/albums/" + attrs.title;
    attrs.edit_album = Routes.edit_album_path(attrs.id);
    attrs.delete_album = Routes.album_path(attrs.id);
    return attrs;
  }
});

// "Routes" and ".._path.." provided by 'js-routes' gem
// Note: Can use json w/ js-routes like this: Routes.user_path(1, {format: 'json'})
// See 'https://github.com/railsware/js-routes' for more configurations
