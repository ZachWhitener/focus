
(function() {

  var focused = false;
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (!focused) {
      if (request.type == 'focus') {
        focus();
      }
    } else {
      unfocus();
      focused = false;
    }
  });

  function focus() {
    if ($('.__focus').length == 0) {
      var focusDiv = '<div class="__focus"><div class="__focus-exit">x</div></div>';
      document.body.innerHTML += focusDiv;

      $(".__focus").draggable();
      $(".__focus").resizable();
    }
    focused = true;
    $('.__focus').show();

    $(".__focus-exit").on("click", function() {
      unfocus();
    });

  }

  function unfocus() {
    $('.__focus').hide();
  }
})();
