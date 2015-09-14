onmessage = function(app_data) {
  console.log(app_data);
  var data = app_data.data.image_data.data; // local canvas image data

  for (var i = 0; i < data.length; i += 4) { // a 'for' loop is far more performant than a jQuery 'forEach' loop...for such a large array
    for (var j = 0; j < 3; j++) {
      data[i + j] = 255 - data[i + j];
    }
  }
  postMessage(app_data.data);
}