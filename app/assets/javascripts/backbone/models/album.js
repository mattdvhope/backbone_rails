var Album = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.songs_url = "/albums/" + attrs.title;
    var album_title = {id: +attrs.id, title: attrs.title, to_param: attrs.title};
    attrs.edit_album = Routes.edit_album_path(album_title); // => "/albums/With%20Footnotes/edit"
    attrs.delete_album = Routes.album_path(attrs.id);
    return attrs;
  }
});

// "Routes" and ".._path.." provided by 'js-routes' gem
// Note: Can use json w/ js-routes like this: Routes.user_path(1, {format: 'json'})
// See 'https://github.com/railsware/js-routes' for more configurations
