let mobile_navigation_icon = document.getElementsByClassName('mobile_navigation_icon')[0];
let mobile_navigation = document.getElementsByClassName('mobile_navigation')[0];

mobile_navigation_icon.onclick = function () {
    if (mobile_navigation.classList.contains('modal_visible')) {
        mobile_navigation.classList.remove('modal_visible');
    } else {
        mobile_navigation.classList.add('modal_visible');
    }
}
