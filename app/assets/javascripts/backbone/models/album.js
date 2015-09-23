var Album = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.tracks_url = "/album/" + attrs.title;
    console.log(attrs);
    return attrs;
  }
});