var map = {
  width: 600,
  height: 420,
  buildURL: function() {
    var base = "http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=",
        coords = this.position.coords.latitude + "," + this.position.coords.longitude;
    base += this.width + "x" + this.height + "&center=" + coords;
    return base + "&markers=" + coords;
  },
  buildImage: function() {
    var $img = $("<img />", {
      width: this.width,
      height: this.height,
      src: this.buildURL()
    });
    // document.body.innerHTML = $img.get(0); // this pure js is actually faster than jQuery below
    $(document.body).html($img); // 
  },
  build: function(position) { // build an image with this
    console.log(this);
    this.position = position;
    this.buildImage();
    // weather.get();
  }
};

// var weather = {
//   endpoint: "http://api.openweathermap.org/data/2.5/weather",
//   get: function() { // this is the  ajax call
//     var dfd = $.ajax({ // the ajax method returns a "deferred" object, thus 'dfd' (common in jQuery usage)
//       url: this.endpoint + "?lat=" + map.position.coords.latitude + "&lon=" + map.position.coords.longitude,
//       dataType: "json"
//     });
//     dfd.done(function(json) { console.log(json); });
//   }
// };

navigator.geolocation.getCurrentPosition(map.build.bind(map)); // use 'bind' b/c we don't want the context to be the window object




