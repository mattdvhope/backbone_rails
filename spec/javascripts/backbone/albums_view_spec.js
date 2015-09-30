var albums_scaffold = new Albums();
albums_scaffold.reset([{ // use the Backbone collection 'reset' method to wipe out anything currently in the collection and then start with the data that is new here...
  "artist":"2nd Chapter of Acts",
  "title":"With Footnotes",
  "url":"https://itunes.apple.com/us/album/unbreakable-smile-bonus-track/id988591612?v0=WWW-NAUS-ITSTOP100-ALBUMS\u0026l=en\u0026ign-mpt=uo%3D4",
  "date":"Jun 23, 2015",
  "cover":"https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/2nd+Chapter.png"
}, {
  "artist":"Keith Green",
  "title":"Collection",
  "url":"https://itunes.apple.com/us/album/1989/id907242701?v0=WWW-NAUS-ITSTOP100-ALBUMS\u0026l=en\u0026ign-mpt=uo%3D4",
  "date":"Oct 27, 2014",
  "cover":"https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Keith+Green.png"
}, {
  "artist":"Rich Mullins",
  "title":"Songs",
  "url":"https://itunes.apple.com/us/album/dark-before-dawn/id975950518?v0=WWW-NAUS-ITSTOP100-ALBUMS\u0026l=en\u0026ign-mpt=uo%3D4",
  "date":"Jun 23, 2015",
  "cover":"https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Rich+Mullins.png"
}]);

describe('Albums View', function() {

  beforeEach(function() {
    MagicLamp.load("pages/index");
    this.view = new AlbumsView({ // anything attached to 'this' will be accessible within our test statements
      collection: albums_scaffold
    });
  });

  it("should have a collection property assigned", function() {
    expect(this.view.collection).toBeDefined();
    expect(this.view.collection.length).toBe(albums_scaffold.length);
  });

  it("should have Handlebars template compiled", function() {
    expect(this.view.template).toBeDefined();
  });

  it("should render to an #albums container when render is called", function() {
    this.view.render();
    expect($("#albums li").length).toBe(albums_scaffold.length);
  });

  it("should re-render the view when the collection changes", function() {
    var model = albums_scaffold.findWhere({ artist: "Keith Green" }),
        original_html, new_html;

    this.view.render();
    original_html = $("#albums").html();
    model.set("title", "Keith Javascript"); // triggers 'listenTo' event
    new_html = $("#albums").html();
    expect(original_html).not.toEqual(new_html);
  })

});







