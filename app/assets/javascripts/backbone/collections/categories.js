window.Categories = Backbone.Collection.extend({

  model: Category,
  url : function() {
    return 'categories';
  }

});