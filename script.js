const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function activateNext() {
  const items = document.querySelectorAll('.item');
  slider.appendChild(items[0]);
}

function activatePrev() {
  const items = document.querySelectorAll('.item');
  slider.prepend(items[items.length - 1]);
}

next.addEventListener('click', activateNext);
prev.addEventListener('click', activatePrev);

// Auto-slide every 5 seconds
setInterval(activateNext, 5000);
