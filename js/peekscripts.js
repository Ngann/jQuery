
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $(".fade-toggle").click(function(){
    $("#fadetoggle").fadeToggle("slow","linear");
  });
  
});
