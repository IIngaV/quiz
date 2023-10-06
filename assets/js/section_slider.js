let leftButton = document.getElementsByClassName('button-slider-control-left')[0];
let rightButton = document.getElementsByClassName('button-slider-control-right')[0];
let elem_visible = document.getElementById('carousel__viewport');
var carousel_slide = document.getElementsByClassName('carousel__slide')[0];

document.addEventListener("DOMContentLoaded", () => {
    elem_visible.scroll({ left: elem_visible.offsetWidth/2 });
});

leftButton.addEventListener("click", function () {
    elem_visible.scroll({ behavior: "smooth", left: elem_visible.scrollLeft - carousel_slide.offsetWidth });
});
rightButton.addEventListener("click", function () {
    elem_visible.scroll({ behavior: "smooth", left: elem_visible.scrollLeft + carousel_slide.offsetWidth });
});
