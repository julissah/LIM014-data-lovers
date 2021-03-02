var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(e){
  showSlides(slideIndex += parseInt(e.target.name))
}
document.getElementById('prev').addEventListener('click', plusSlides)
document.getElementById('next').addEventListener('click', plusSlides)
// document.getElementById('slide1').addEventListener('click',currentSlide)
// document.getElementById('slide2').addEventListener('click',currentSlide)
// document.getElementById('slide3').addEventListener('click',currentSlide)

// Thumbnail image controls
// function currentSlide(e) {
//   showSlides(slideIndex = parseInt(e.target.name))
//   console.log(e.target.name)
// }
function currentSlide(e){
  showSlides(slideIndex = e)
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

pageRio.addEventListener("click", rioPage);
pageMedals.addEventListener("click", medalsPage);
pageCountries.addEventListener("click", countriesPage);
pageAthletes.addEventListener("click", athletesPage);
pageSports.addEventListener("click", sportsPage);


function rioPage() {
    document.querySelector(".pageRio").style.display = "block";
    document.querySelector(".pageMedals").style.display = "none";
    document.querySelector(".pageCountries").style.display = "none";
    document.querySelector(".pageSports").style.display = "none";
    document.querySelector(".pageAthletes").style.display = "none";
}

function athletesPage() {
  document.querySelector(".pageAthletes").style.display = "block";
  document.querySelector(".pageMedals").style.display = "none";
  document.querySelector(".pageCountries").style.display = "none";
  document.querySelector(".pageSports").style.display = "none";
  document.querySelector(".pageRio").style.display = "none";
}

function medalsPage() {
  document.querySelector(".pageMedals").style.display = "block";
  document.querySelector(".pageAthletes").style.display = "none";  
  document.querySelector(".pageCountries").style.display = "none";
  document.querySelector(".pageSports").style.display = "none";
  document.querySelector(".pageRio").style.display = "none";
}
function sportsPage() {
  document.querySelector("#pageMedals").style.display = "none";
  document.querySelector(".pageAthletes").style.display = "none";  
  document.querySelector(".pageCountries").style.display = "none";
  document.querySelector(".pageSports").style.display = "block";
  document.querySelector(".pageRio").style.display = "none";
}

function countriesPage() {
  document.querySelector(".pageMedals").style.display = "none";
  document.querySelector(".pageAthletes").style.display = "none";  
  document.querySelector(".pageCountries").style.display = "block";
  document.querySelector(".pageSports").style.display = "none";
  document.querySelector(".pageRio").style.display = "none";
}