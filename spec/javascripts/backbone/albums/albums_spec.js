describe('Albums collection', function() {

  it("fetches a collection of three albums", function(done) {

    var albumsLoaded = App.albumsLoaded;
    App.albumsLoaded = function() {
      albumsLoaded.apply(App, arguments);
      expect(App.albums.models.length).toBe(3);
      expect(typeof App.albums.models[0].attributes.title).toBe("string");
      done(); // 'done' callback to tell Jasmine that our method is done running and it continue on with the other specs
    };

    App.init();
  });

});










