var PostModel = Backbone.Model.extend({
  // url: "http://localhost:3000/posts.json",
  url: "http://jsonplaceholder.typicode.com/posts",

  initialize: function() {
    if (!this.get("id")) {
      this.set("id", this.collection.nextID());
    }
  }
});

var Posts = Backbone.Collection.extend({
  model: PostModel,
  url: "http://localhost:3000/posts.json",
  last_id: 0,
  setLastID: function() {
    if (this.isEmpty()) { return; }

    this.last_id = this.last().get("id");
  },
  nextID: function() {
    return ++this.last_id;
  },
  initialize: function() {
    this.on("sync", this.setLastID);
  }
});

var blog_roll = new Posts();
// console.log(blog_roll.toJSON());

blog_roll.fetch({
  reset: true,
  success: function(collection) {
    // console.log(blog_roll.toJSON());
  }
});

blog_roll.set({
  id: 1,
  user_id: 1,
  title: "My 1st Post",
  body: "This is my 1st Post!!!"
});

var first_post = blog_roll.get(1);

// console.log(first_post.toJSON());

var new_post = blog_roll.create({
  title: "New Blog Post",
  body: "Latest New Blog Post is here!!",
  user_id: 101
});

// after the request completes
// console.log(new_post.get("id"));
// console.log(new_post.toJSON());

var posts_by_author_1 = blog_roll.where({ user_id: 1 });
// console.log(posts_by_author_1);

console.log(blog_roll.first().toJSON()); // id: 1
blog_roll.comparator = "title";
blog_roll.sort();
console.log(blog_roll.first().toJSON()); // id: 30




var User = Backbone.Model.extend({}),
    Users = Backbone.Collection.extend({
      model: User
    }),
    blog_authors;

blog_authors = new Users();
blog_authors.reset(users_data);

var authors = [];

         // 'models' is a Backbone method which gives our collection an array of its models
blog_authors.models.forEach(function(model) {
  authors.push(model.toJSON());
});

// console.log(authors);

















