// Mã JavaScript cho video
const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = 'Tạm dừng <i class="ri-pause-circle-line"></i>';
    } else {
        video.pause();
        playPauseBtn.innerHTML = 'Phát lại <i class="ri-play-circle-line"></i>';
    }
}

video.addEventListener('ended', () => {
    playPauseBtn.innerHTML = 'Phát lại <i class="ri-play-circle-line"></i>';
});

// Mã JavaScript cho nhiều FAQ
const faqs = document.querySelectorAll('.faq'); // Select all .faq elements

faqs.forEach(faq => {
  const question = faq.querySelector('.question');
  const answer = faq.querySelector('.answer');
  const icon = faq.querySelector('.icon');

  question.addEventListener('click', () => {
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.classList.remove('rotate');
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.classList.add('rotate');
    }
  });
});
function navigateTo(url) {
  if (url === 'search') {
    // Perform a search action or redirect to a search page
    alert('Search action triggered'); // Replace this with actual search logic
  } else {
    window.location.href = url; // Redirects to the specified URL
  }
}
const btn = document.getElementById('btn');
const cancel = document.getElementById('cancel');
const navMenu = document.querySelector('nav ul');
const check = document.getElementById('check');
btn.addEventListener('click', function() {
  navMenu.style.left = '0'; // Show the menu
  btn.style.display = 'none'; // Hide the "menu" button
  cancel.style.display = 'block'; // Show the "cancel" button
  check.checked = true; // Ensure checkbox is checked
});
cancel.addEventListener('click', function() {
  navMenu.style.left = '-100%'; // Hide the menu
  btn.style.display = 'block'; // Show the "menu" button
  cancel.style.display = 'none'; // Hide the "cancel" button
  check.checked = false; // Uncheck the checkbox
});