(function($) {
  "use strict"; // Start of use strict
  // Configure tooltips for collapsed side navigation
  
  // Toggle the side navigation
  $("#sidenavToggler").click(function(e) {
    e.preventDefault();
    $("body").toggleClass("sidenav-toggled");
  });
})(jQuery); // End of use strict
