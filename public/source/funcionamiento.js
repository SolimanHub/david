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
