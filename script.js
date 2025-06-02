
var slides = document.querySelectorAll(".slide");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");

var currentIndex = 0;


function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}


function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
  }
  return null;
}


var saved = getCookie("sliderIndex");
if (saved !== null) {
  currentIndex = parseInt(saved, 10);
}

function updateSlider() {
  slides.forEach((slide, index) => {
    const offset = (index - currentIndex) * 100;
    slide.style.transform = `translateX(${offset}%)`;
  });


  setCookie("sliderIndex", currentIndex, 3);
}

function goPrev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

function goNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);

updateSlider();
