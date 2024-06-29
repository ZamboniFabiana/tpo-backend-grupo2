let slideIndex = 1;
mostrarSlides(slideIndex);

// Next/previous controls
function desplazar(n) {
  mostrarSlides(slideIndex += n);
}

// Thumbnail image controls
function actualizar(n) {
  mostrarSlides(slideIndex = n);
}

function mostrarSlides(n) {
  let i;
  let slides = document.getElementsByClassName("oculta");
  let dots = document.getElementsByClassName("punto");
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

function enfocarBusqueda(){
    var input = document.getElementById("searchInput");
    input.focus();// Dar foco al input
};