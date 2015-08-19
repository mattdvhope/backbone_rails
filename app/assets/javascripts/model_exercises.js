// var ready; // Done this way to deal with Turbolinks !!!  See... http://stackoverflow.com/questions/18770517/rails-4-how-to-use-document-ready-with-turbo-links
// ready = function() {

  // var appLocation = "http://localhost:3000";
  var appLocation = "http://young-bayou-5856.herokuapp.com";

  var PostModel = Backbone.Model.extend({
    urlRoot: appLocation + "/posts",
    setUser: function() {
      var self = this, // cache the current context
          user = new UserModel({ id: self.get("user_id") });

      user.fetch({
        success: function(model) {
          console.log(self.toJSON());
          self.set("user", model);
          console.log(self.toJSON());
        }
      });
    },
    initialize: function() { // this 'initialize' method enables us to set the current user on ANY post
      this.on("change:user_id", this.setUser); // regarding 'change:user_id' see http://backbonejs.org/#Events-catalog 
    }
  });

  var UserModel = Backbone.Model.extend({
    urlRoot: appLocation + "/users"
  });

  var post_1 = new PostModel({ id: 56 });

  post_1.fetch();



// };

// $(document).ready(ready);
// $(document).on('page:load', ready);