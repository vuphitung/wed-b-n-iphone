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
// Mã JavaScript cho nhiều FAQ
const faqs = document.querySelectorAll('.faq'); // Chọn tất cả các phần tử .faq

faqs.forEach(faq => {
  const question = faq.querySelector('.question'); // Chọn phần tử .question trong faq
  const answer = faq.querySelector('.answer'); // Chọn phần tử .answer trong faq
  const icon = faq.querySelector('.icon'); // Chọn phần tử .icon trong faq

  question.addEventListener('click', () => {
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null; // Ẩn câu trả lời nếu nó đã được mở
      icon.classList.remove('rotate'); // Xoá lớp .rotate khỏi biểu tượng
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px"; // Hiển thị câu trả lời
      icon.classList.add('rotate'); // Thêm lớp .rotate vào biểu tượng
    }
  });
});

function navigateTo(url) {
  if (url === 'search') {
    // Thực hiện hành động tìm kiếm hoặc chuyển hướng đến trang tìm kiếm
    alert('Kích hoạt hành động tìm kiếm'); // Thay thế bằng logic tìm kiếm thực tế
  } else {
    window.location.href = url; // Chuyển hướng đến URL được chỉ định
  }
}

const btn = document.getElementById('btn'); // Lấy phần tử có id là 'btn'
const cancel = document.getElementById('cancel'); // Lấy phần tử có id là 'cancel'
const navMenu = document.querySelector('nav ul'); // Lấy menu điều hướng
const check = document.getElementById('check'); // Lấy phần tử checkbox với id 'check'

btn.addEventListener('click', function() {
  navMenu.style.left = '0'; // Hiển thị menu
  btn.style.display = 'none'; // Ẩn nút "menu"
  cancel.style.display = 'block'; // Hiển thị nút "cancel"
  check.checked = true; // Đánh dấu checkbox
});

cancel.addEventListener('click', function() {
  navMenu.style.left = '-100%'; // Ẩn menu
  btn.style.display = 'block'; // Hiển thị lại nút "menu"
  cancel.style.display = 'none'; // Ẩn nút "cancel"
  check.checked = false; // Bỏ đánh dấu checkbox
});
