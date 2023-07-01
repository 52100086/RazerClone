var cart_btn = $('#cart');
var subnav   = $('#sub');


cart_btn.on('click', function (e){
    e.preventDefault();
    subnav.css('display', 'block');
    e.stopPropagation();
});


$(document).on('click', function (e) {
    // Check if the click target is not a descendant of #sub
    if (!subnav.is(e.target) && subnav.has(e.target).length === 0) {
      subnav.css('display', 'none');
    }
});