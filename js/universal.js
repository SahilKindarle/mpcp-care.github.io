M.AutoInit();
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');

    var elems2 = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems2,{indicators: false, duration: 2000,interval:2000});
  
});
