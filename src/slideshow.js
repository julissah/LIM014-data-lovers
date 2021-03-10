var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(e){
  showSlides(slideIndex += parseInt(e.target.name))
}
document.getElementById('prev').addEventListener('click', plusSlides)
document.getElementById('next').addEventListener('click', plusSlides)

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName('dot');
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

// MOSTRAR Y OCULTAR PÁGINAS PRINCIPAL & SECUNDARIAS // 
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
  document.querySelector(".pageMedals").style.display = "none";
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

// NAVBAR - SCROLLBAR - RESPONSIVE SIDEBAR

//  JS Para efecto de barra de navegación con efecto scroll 
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

// JS para navegación responsive sidebar menu
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

menu.addEventListener("click", () => {
  menu.classList.remove('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});

// Contadores Rio
const contadores = document.querySelectorAll('.contador-cantidad')
const velocidad = 2000;
const animarContadores = () =>{
  for(const contador of contadores) {    
      const actualizarContador = () => {
        let cantidadMax = +contador.dataset.cantidadTotal,
        valorActual = +contador.innerText,
        incremento = cantidadMax / velocidad

        if (valorActual < cantidadMax) {
          contador.innerText = Math.ceil(valorActual + incremento)
          setTimeout(actualizarContador, 5);
        } else {
          contador.innerText = cantidadMax
        }

      }
      actualizarContador()
    }
}

const mostrarContadores = elementos => {
  elementos.forEach(elemento => {
    if (elemento.isIntersecting) {
      elemento.target.classList.add('animar')
      elemento.target.classList.remove('ocultar')
      setTimeout(animarContadores, 300);
    }
  });
}

const observer = new IntersectionObserver(mostrarContadores, {
  threshold: 0.75
})

const elemetosHTML = document.querySelectorAll('.contador')
elemetosHTML.forEach(elemetoHTML => {
  observer.observe(elemetoHTML)
})

animarContadores()