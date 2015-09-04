var ready; // 'ready' etc for Turbolinks...
ready = function() {

  $("nav").on("click", "a", function(e) {
    e.preventDefault();
    var $e = $(e.target),
        idx = $e.attr("href");

    switchPage(idx);

    window.history.pushState({ idx: idx }, $e.text(), idx); // actually don't need the 'window' object explicitely here ...see https://developer.mozilla.org/en-US/docs/Web/API/History_API {
  });

  $(window).on("popstate", function(e) { // using jQuery to attach the 'popstate' event to the window
    var state = e.originalEvent.state;

    switchPage(state === null ? "#page_1" : state.idx);
  });

  if (location.hash) {
    console.log(location.hash);
    switchPage(location.hash);
  }

  function switchPage(idx) {
    $(".active").removeClass("active");
    $("nav a[href ='" + idx + "']").addClass("active");
    $("article").hide().filter(idx).show();
  }

};

$(document).ready(ready);
$(document).on('page:load', ready);

