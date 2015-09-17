function Honda(model) {
  var current_model = this.verify(model);

  if (!current_model) {
    throw new Error("Model " + model + " does not exist.");
    return undefined; // we don't want to receive an instance of a Honda here ; if we don't return 'undefined', we'll still return a Honda with a 'make' (but not 'model') on it
  }

  this.make = "Honda";
  this.model = model;
  this.price = Honda.getPrice(this.model);
}

(function() { // made this closure b/c we want to keep the variables, 'models' and 'prices' out of the global name-space, thus preventing them from being altered ; only our "Honda" constructor has access to them now
  var models = ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
  var prices = [ 16500,    14500,   21000,       15800,  12000, 13100, 16000,   18100,     22500,     19300]

  Honda.prototype = Object.create(Vehicle.prototype);

  Honda.prototype.verify = function(model) {
    return models.indexOf(model) !== -1;
  };

  Honda.getPrice = function(model) { return prices[models.indexOf(model)]; };
  Honda.getModels = function() { return models.slice(); };

  Honda.constructor = Honda;
})();






