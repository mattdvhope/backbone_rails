// var ready; // Done this way to deal with Turbolinks !!!  See... http://stackoverflow.com/questions/18770517/rails-4-how-to-use-document-ready-with-turbo-links
// ready = function() {

  var appLocation = "http://localhost:3000";

  var PostModel = Backbone.Model.extend({
    urlRoot: appLocation + "/posts"
  });

  console.log(typeof PostModel);

// };

// $(document).ready(ready);
// $(document).on('page:load', ready);