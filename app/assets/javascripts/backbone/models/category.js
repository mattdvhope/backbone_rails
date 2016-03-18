window.Category = Backbone.Model.extend({

  url: function() {
console.log(this.get('id'));
    if (this.get('id')) {
      return '/category' + this.get('id');      
    } else {
      return '/categories';
    }
  }

});
