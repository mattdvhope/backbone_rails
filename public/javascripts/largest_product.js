console.log("Here????");

function largestProduct(digit_string, sub_length) {
  var largest_product = 0,
      current_product,
      substr,
      last_index = digit_string.length - sub_length;

  if (last_index <= 0) { return 0; }

  for (var i = 0; i < last_index; i++) {
    substr = digit_string.substr(i, sub_length);

    if (/0/.test(substr)) { continue; } // continue through the next iteration of our loop

    current_product = product(substr);
    if (current_product > largest_product) { largest_product = current_product; }
  }
  return largest_product;
}

function product(digits) {
  return digits.split("").reduce(function(total, b) { return +total * +b; });
  // var result = 1;
  // for (var i = 0, len = digits.length; i < len; i++) {
  //   result *= digits[i];
  // }
  // return result;
}

onmessage = function(message) {
  var digit_string = message.data[0],
      sub_length = message.data[1];

  postMessage(largestProduct(digit_string, sub_length));
}


