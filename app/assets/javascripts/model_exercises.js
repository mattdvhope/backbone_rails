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
          self.set("user", model);
          // console.log(self.toJSON());
        }
      });
    },
    initialize: function() { // this 'initialize' method enables us to set the current user on ANY post
      this.has("user_id") && this.setUser(); // this is a 'short-circuit'...if this does NOT have a user_id, then the right side of '&&' never gets evaluated/run ; 'has' from Underscore
      this.on("change:user_id", this.setUser); // regarding 'change:user_id' see http://backbonejs.org/#Events-catalog 
      this.on("change", function(model) { // In backbone, the first arguement (a model) is automatically passed in here
        model.has("user") && renderPost(model);
      });
    }
  });

  var UserModel = Backbone.Model.extend({
    urlRoot: appLocation + "/users"
  });

  var post_1 = new PostModel({ id: 1 });

  post_1.fetch();

  var post_2 = new PostModel({
    id: 2,
    title: "My New Post",
    body: "This is my new blog post. Enjoy!!",
    user_id: 2
  });


  function renderPost(model) {
    $("article").remove();
    $("article").empty();
    var post_html = $("#post").html();
    var $post = $(post_html);
    $post.find("h1").text(model.get("title"));
  console.log(model.toJSON());
    $post.find("header p").text("By " + model.get("user").get("name"));
    $post.find("header + p").text(model.get("body"));
    $(document.body).append($post);
  }


// };
// $(document).ready(ready);
// $(document).on('page:load', ready);