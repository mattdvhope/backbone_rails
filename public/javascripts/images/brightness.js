onmessage = function(app_data) {
  var data = app_data.data.image_data.data, // local canvas image data
      b = Math.floor(255 * +app_data.data.param / 100);

  for (var i = 0, length = data.length; i < length; i += 4) {
    data[i] += b;
    data[i + 1] += b;
    data[i + 2] += b;
  }

  postMessage(app_data.data);
}