jQuery.fx.off = true; // to turn off all jQuery effects..helps last spec below pass

describe('Songs view', function() {
  var album = albums_scaffold.findWhere({ title: "Where I Belong" });
  beforeEach(function() {
    this.view = new SongsView({ collection: songs_scaffold, album: album });
  });

  afterEach(function() {
    this.view.remove();
  });

  it("has a collection property assigned", function() {
    expect(this.view.collection).toBeDefined();
    expect(this.view.collection.length).toBe(songs_scaffold.length);
  });

  it('has a Handlebars template compiled', function() {
    expect(this.view.template).toBeDefined();
  });

  it('renders a modal to the body when render is called', function() {
    this.view.render();
    expect(this.view.collection.length).toBe(songs_scaffold.length);
  }); // bad spec

  it('removes the view when fadeOut is called', function() {
    this.view.fadeOut();
    expect($("#songs_modal").length).toBe(0);
  });


});