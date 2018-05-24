'use strict';

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide showing';
}
var next = document.getElementById('next');
var prew = document.getElementById('prew');

var slidees = document.getElementsByClassName('slidee');
for (var i = 0; i < slidees.length; i++) {
  slides[i].style.zIndex = slides.length - i;
}

next.onclick = function () {
  var activeEl = document.querySelector('.active');
  if (activeEl.nextElementSibling) {
    activeEl.style.left = "-500%";
    activeEl.classList.remove('active');
    activeEl.nextElementSibling.classList.add('active');
    this.classList.remove('no_active');
    prew.classList.remove('no_active');
    if (!activeEl.nextElementSibling.nextElementSibling) {
      this.classList.add('no_active');
    }
  }
};
prew.onclick = function () {
  var activeEl = document.querySelector('.active');
  if (activeEl.previousElementSibling) {
    activeEl.previousElementSibling.style.left = "0%";
    activeEl.classList.remove('active');
    activeEl.previousElementSibling.classList.add('active');
    this.classList.remove('no_active');
    next.classList.remove('no_active');
    if (!activeEl.previousElementSibling.previousElementSibling) {
      this.classList.add('no_active');
    }
  }
};

window.onload = function () {
  var imgArr = document.getElementsByClassName('my__img');

  var modalWindow = document.getElementById('my__modal');
  var modalImg = document.getElementById('img01');
  var caption = document.getElementById('caption');
  var span = document.getElementById('close');
  var modalBlock = document.getElementById('modal__block');

  for (var _i = 0; _i < imgArr.length; _i++) {
    var picture = imgArr[_i];
    picture.onclick = function () {
      openImg(this);
    };
  }
  function openImg(pic) {
    modalWindow.style.display = 'block';
    modalBlock.style.transform = 'translateY(0%)';
    modalImg.src = pic.src;
    modalImg.alt = pic.alt;
    caption.innerHTML = modalImg.alt;
  }

  function close() {
    modalWindow.style.display = 'none';
  }
  span.onclick = function () {
    modalBlock.style.transform = 'translateY(-100%)';

    setTimeout(close, 500);
  };
  modalBlock.onclick = function () {
    modalBlock.style.transform = 'translateY(-100%)';

    setTimeout(close, 500);
  };
};

document.getElementsByClassName("modal__block").onclick = function () {
  document.getElementsByClassName("modal__block").style.display = "none";
};