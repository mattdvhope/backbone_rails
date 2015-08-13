var ready; // Done this way to deal with Turbolinks !!!  See... http://stackoverflow.com/questions/18770517/rails-4-how-to-use-document-ready-with-turbo-links
ready = function() {

  console.log("Inside sample.js!!!!")

};

$(document).ready(ready);
$(document).on('page:load', ready);