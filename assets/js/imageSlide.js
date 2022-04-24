console.log("iamgeSlide.js Chargé !");
var slideIndex = 1;
showSlides(slideIndex, 1);
showSlides(slideIndex, 2);

function plusSlides(n, slideNum) {
  showSlides(slideIndex += n, slideNum);
}

function currentSlide(n, slideNum) {
  showSlides(slideIndex = n, slideNum);
}

function showSlides(n, slideNum) {
  var i;
  var slides = document.getElementsByClassName(`slide${slideNum}`);
  var dots = document.getElementsByClassName(`dot${slideNum}`);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}