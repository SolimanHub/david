window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY === 0) {
        header.classList.add('scroll-top');
    } else {
        header.classList.remove('scroll-top');
    }
});
function toggleMenu() {
// Despliega el menu en movil
  const menu = document.querySelector('.menux');
  menu.classList.toggle('menu-open');
  console.log("Estado de menu-open:", menu.classList.contains('menu-open'));
}
document.querySelectorAll('.galeria-proyectos .proyecto p').forEach(parrafo => {
  //muestra y oculta el contenido del parrafo de las tarjetas de proyecto
  parrafo.addEventListener('click', function() {
    if (this.style.overflow === 'hidden') {
      this.style.overflow = 'initial';
      this.style.webkitLineClamp = 'none';
      this.style.maxHeight = '1000px';
    } else {
      this.style.overflow = 'hidden';
      this.style.webkitLineClamp = 4;
      this.style.maxHeight = '80px';
    }
  });
});
