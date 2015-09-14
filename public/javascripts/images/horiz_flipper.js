onmessage = function(app_data) {
  var data = app_data.data.image_data.data, // local canvas image data
      columns = app_data.data.image_data.width, // number of pixel columns in the image
      rows = app_data.data.image_data.height,
      new_row, current_row;

  console.log(columns);
  console.log(rows);
  console.log(data.length);
  // console.log(data[0]);
  // console.log(data[1]);
  // console.log(data[2]);
  // console.log(data[3]);
  // console.log(data[4]);
  // console.log(data[5]);
  // console.log(data[6]);
  // console.log(data[7]);

  for (var y = 0; y < rows; y++) {
    new_row = [];
    current_row = y * columns * 4;
    for (var x = current_row; x < current_row + columns * 4; x += 4) {
      new_row.push(data[x + 3]); // alpha channel
      new_row.push(data[x + 2]); // blue value channel
      new_row.push(data[x + 1]); // green value channel
      new_row.push(data[x]); // red value channel
    }

    new_row.reverse(); // rows are switched

    for (var i = 0; i < new_row.length; i += 4) {
      data[current_row + i] = new_row[i];
      data[current_row + i + 1] = new_row[i + 1];
      data[current_row + i + 2] = new_row[i + 2];
      data[current_row + i + 3] = new_row[i + 3];
    }
  }

  postMessage(app_data.data);
}







