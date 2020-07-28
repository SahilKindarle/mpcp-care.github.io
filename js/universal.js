M.AutoInit();
document.addEventListener('DOMContentLoaded', function () {
    // loader = document.getElementById('loader');
    // loadNow(1);

    var elems = document.querySelectorAll('.sidenav');
    var elems2 = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems2, {
        indicators: false,
        duration: 2000,
        interval: 2000
    });

});


// var loader;

// function loadNow(opacity) {
//     if (opacity <= 0) {
//         displayContent();
//     } else {
//         loader.style.opacity = opacity;
//         window.setTimeout(function () {
//             loadNow(opacity - 0.8);
//         }, 5000);
//     }
// }

// function displayContent() {
//     loader.style.display = 'none';
//     document.getElementById('content').style.display = 'block';
// }


