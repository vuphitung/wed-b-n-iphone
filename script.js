let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');

let lengthItems = items.length - 1;
let active = 0;

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    // Reset lại interval mỗi khi reloadSlider được gọi
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { nextImage() }, 3000);
}

function nextImage() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

// Bắt đầu tự động chuyển slide
let refreshInterval = setInterval(() => { nextImage() }, 3000);

// Điều chỉnh lại slider khi thay đổi kích thước cửa sổ
window.onresize = function() {
    reloadSlider();
};

// Thiết lập ban đầu cho slider
reloadSlider();
