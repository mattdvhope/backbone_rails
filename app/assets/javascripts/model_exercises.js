// var ready; // Done this way to deal with Turbolinks !!!  See... http://stackoverflow.com/questions/18770517/rails-4-how-to-use-document-ready-with-turbo-links
// ready = function() {

  var appLocation = "http://localhost:3000";

  var PostModel = Backbone.Model.extend({
    urlRoot: appLocation + "/posts"
  });

  var post_1 = new PostModel({ id: 1 });

  // console.log(post_1.toJSON());

  post_1.fetch({ // 'fetch' acts like an 'ajax' success callback ; in this case, it will send all of the properties that are currently on the model ('id' of the 'post_1' model, in this case); the server will then USE that data to look for the particular record that matches those look for the attributes in the JSON url, and send back the whole object back, attaching all of the missing (extra) attributes to that model
    success: function(model) {
      console.log(model.toJSON());
    }
  });







// };

// $(document).ready(ready);
// $(document).on('page:load', ready);