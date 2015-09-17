describe('Honda constructor', function() {

  it('sets the model property when a valid model is passed in', function() {
    var car = new Honda("Civic");

    expect(car.make).toEqual("Honda");
    expect(car.model).toEqual("Civic");
  });

  it ("throws an error if an invalid model is passed in", function() {
    var makeInvalidCar = function() {
      new Honda("Prelude");
    };

    expect(makeInvalidCar).toThrowError(/Prelude/) // see 'toThrowError' in http://jasmine.github.io/2.3/introduction.html
  });

  it('returns a list of valid models', function() {
    expect(Honda.getModels().length).toBeDefined();
    expect(Honda.getModels()).toContain("Civic"); // see 'toContain' in http://jasmine.github.io/2.3/introduction.html
  });

  it('calls getPrice when a new car is created', function() { // using a 'spy' here (something like 'mocks & stubs' in rspec)
    spyOn(Honda, "getPrice"); // this will temporarily replace the method, 'getPrice'
    var car = new Honda("Civic");

    expect(Honda.getPrice).toHaveBeenCalled();
    expect(Honda.getPrice).toHaveBeenCalledWith("Civic");
  });

  it('returns a price for the passed in model', function() {
    expect(Honda.getPrice("Civic")).toBeGreaterThan(0);
  });

  it('returns a price less than 15000 when a Civic is created', function() {
    var car = new Honda("Civic");

    expect(car.price).toBeLessThan(15000);
  });

  it('returns a price greater than 10000 when a CR-Z is created', function() {
    var car = new Honda("CR-Z");

    expect(car.price).toBeGreaterThan(10000);
  });

  it("is a subclass of Vehicle", function() {
    var civic = new Honda('CR-Z');
    expect(civic.toString()).toEqual('Honda CR-Z');
  });

});




