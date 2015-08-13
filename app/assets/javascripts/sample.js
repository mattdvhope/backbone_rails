var ready; // Done this way to deal with Turbolinks !!!
ready = function() {

  console.log("Inside sample.js!!!!")

};

$(document).ready(ready);
$(document).on('page:load', ready);