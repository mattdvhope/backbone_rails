describe('Albums View', function() {

  beforeEach(function() {
    MagicLamp.load("pages/index");
    this.view = new AlbumsView({ // anything attached to 'this' will be accessible within our test statements
      collection: albums_scaffold // in helpers folder
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







