var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(e) {
  showSlides(slideIndex += parseInt(e.target.name))
}
document.getElementById('prev').addEventListener('click', plusSlides)
document.getElementById('next').addEventListener('click', plusSlides)
document.getElementById('slide1').addEventListener('click',currentSlide)
document.getElementById('slide2').addEventListener('click',currentSlide)
document.getElementById('slide3').addEventListener('click',currentSlide)

// Thumbnail image controls
function currentSlide(e) {
  showSlides(slideIndex = parseInt(e.target.name))
  console.log(e.target.name)
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  console.log([slideIndex-1])
  dots[slideIndex-1].className += " active";
}