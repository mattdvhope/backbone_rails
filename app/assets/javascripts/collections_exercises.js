var template = Handlebars.compile($("#users").html());

var User = Backbone.NestedAttributesModel.extend({
  url: "http://localhost:3000/users.json",
  relations: [
    {
      type: 'one',
      key: 'address',
      relatedModel: function() { return Address }
    },
    {
      type: 'one',
      key: 'company',
      relatedModel: function() { return Company }
    }
  ]
});

var Address = Backbone.NestedAttributesModel.extend({
  relations: [
    {
      type: 'one',
      key: 'geo',
      relatedModel: function() { return Geo }
    }
  ]
});

var Geo = Backbone.NestedAttributesModel.extend({});

var Company = Backbone.NestedAttributesModel.extend({});


var Users = Backbone.Collection.extend({
  url: "http://localhost:3000/users.json",
  model: User,
  parse: function(response) {
    response.forEach(function(user) {
      user.company_name = user.company.name;
      user.catchPhrase = user.company.catch_phrase;
      user.company_bs = user.company.bs;
      delete user.company;
    });

    return response;
  },
  initialize: function() {
    this.on("sync sort", renderCollection); // in 'blog_writers.fetch();' below, we don't have to put anything into the 'fetch()' b/c we have an event listening to the "sync" event
  }  // the "sync" event fires the 'renderCollection()' method
});

var blog_writers = new Users();

blog_writers.fetch();

function renderCollection() {
  document.body.innerHTML = template({ users: blog_writers.toJSON() }); // 'users' from {{#each users}} in Handlebars html <script> tag
}



    // blog_writers.create({
    //   name: "Mark Malloy",
    //   username: "Mark",
    //   email: "mark@test.tv",
    //   phone: "555-7777",
    //   website: "www.mark.tv",
    //   address:
    //     {
    //       street: "that there street",
    //       suite: "that there suite",
    //       city: "that there CITY",
    //       zipcode: "that there ZIP",
    //       geo:
    //       {
    //         lat: "-37.3159",
    //         lng: "81.1496"
    //       }
    //     },
    //   company:
    //     {
    //       name: "Mark's Company!!",
    //       catchphrase: "Multi-hued client-server neural-net",
    //       bs: "harness real-time e-markets"
    //     }
    // }, {
    //     nested: true,
    //     patch: true,      
    //     success: function() {
    //       blog_writers.fetch({
    //         reset: true,
    //         success: function() {
    //           console.log(blog_writers.toJSON());
    //         }
    //       });
    //     }
    // });









