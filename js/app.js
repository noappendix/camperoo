$(function() {

  var show_dropdown = 0;

  $('.nav-acct-drop-down-link').on({
    mouseenter: function() {
      setTimeout(function() {
        $('.nav-acct-drop-down-box').show();
      }, 250);

      $('.nav-acct-drop-down-box').mouseenter(function() {
        show_dropdown = 1;
      });

      $('.nav-acct-drop-down-box').mouseleave(function() {
        setTimeout(function() {
          show_dropdown = 0;
          $('.nav-acct-drop-down-box').hide();
        }, 250);
      });
    },
    mouseleave: function() {
      setTimeout(function() {
        setTimeout(function() {
          if (show_dropdown != 1) {
            $('.nav-acct-drop-down-box').hide();
          }
        }, 250);
      }, 350);
    }
  })
});

