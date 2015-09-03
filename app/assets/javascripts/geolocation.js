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
    $("#map").html($img);
  },
  latLng: function() {
    return "lat=" + this.position.coords.latitude + "&lon=" + this.position.coords.longitude;
  },
  build: function(position) { // build an image with this
    this.position = position;
    this.buildImage();
    weather.get();
  }
};

var weather = {
  endpoint: "http://api.openweathermap.org/data/2.5/weather",
  template: Handlebars.compile($("#weather_card").html()),
  $el: $("#weather"),
  url: function() {
    return this.endpoint + "?" + map.latLng();
  },
  get: function() { // this is the  ajax call
    var dfd = $.ajax({ // the ajax method returns a "deferred" object, thus 'dfd' (common in jQuery usage)
      url: this.url(),
      dataType: "json"
    });
    dfd.done(this.render.bind(this)); // 'done' and other dfd methods can be found at...  https://api.jquery.com/category/deferred-object/
  },
  temp: function(kelvin) {
    return kelvinToF(kelvin).toFixed(1) + "&deg;F"; // in Handlebars' HTML, use a "triple moustache" to render w/o escaping--to allow the 'degree' symbol from '&deg;'
  },
  processData: function(json) {
    console.log(json.weather[0].id);
    return {
      temp: this.temp(json.main.temp),
      icon: json.weather[0].id, // See http://websygen.github.io/owfont/#usage
      description: json.weather[0].description,
      location: json.name
    };
  },
  render: function(json) {
    this.$el.html(this.template(this.processData(json))).addClass("slide");
  }
};

function kelvinToF(temp) {
  return 9 / 5 * (temp - 273.15) + 32;
}

navigator.geolocation.getCurrentPosition(map.build.bind(map)); // use 'bind' b/c we don't want the context to be the window object




