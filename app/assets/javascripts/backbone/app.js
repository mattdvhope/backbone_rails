//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers



var App = {
  instantiateCategoryView: function() {
    this.categories = new Categories();
    this.categoryView = new CategoryView({ collection: this.categories });
    $("#categorymodal").html(this.categoryView.render().el);
  },

  init: function() {
    this.instantiateCategoryView();
  }
};

App.init();