jQuery(document).ready(function ($) {
  jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };
 
  function live_search(list) {
 
    $(".filterinput")
      .change( function () {
        var searchtext = $(this).val();
        if(searchtext) {
 
          $matches = $(list).find('a:Contains(' + searchtext + ')').parent();
          $('li', list).not($matches).slideUp();
          $matches.slideDown();
 
        } else {
          $(list).find("li").slideDown(200);
        }
        return false;
      })
    .keyup( function () {
        $(this).change();
    });
  }
 
  $(function () {
    live_search($("#contents"));
  });
}(jQuery));
