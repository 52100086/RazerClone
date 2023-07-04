var cart_btn = $('#cart');
var subnav   = $('#sub');


cart_btn.on('click', function (e){
    e.preventDefault();
    subnav.css('display', 'block');
    e.stopPropagation();
});


$(document).on('click', function (e) {
    if (!subnav.is(e.target) && subnav.has(e.target).length === 0) {
      subnav.css('display', 'none');
    }
});