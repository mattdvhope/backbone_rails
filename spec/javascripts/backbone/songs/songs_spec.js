var album = "With Footnotes";

describe('Songs Collection', function() {
  it("fetches a Collection of song models", function(done) {
    var songs = new (Songs.extend({
      url: "/albums/" + album + ".json"
    }))();

    songs.fetch({
      success: function() {
        expect(songs.length).toBeGreaterThan(0);
        expect(songs.url).toEqual("/albums/With Footnotes.json");
        expect(songs.models[0].attributes.songs[0].title).toBeDefined();
        expect(songs.models[0].attributes.songs[0].length).toBeDefined();
        done();
      }
    });
  });
});


