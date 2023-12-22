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
fetch('../assets/elementos/proyecotos.json')
  .then(response => response.json())
  .then(proyectos => {
    const galeria = document.querySelector('.galeria-proyectos');
    proyectos.forEach(proyecto => {
      galeria.innerHTML += `
        <div class="proyecto">
          <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
          <h3>${proyecto.nombre}</h3>
          <p>${proyecto.descripcion}</p>
          <a href="${proyecto.url}" target="_blank">Ver Proyecto</a>
        </div>
      `;
    });
  })
  .catch(error => console.log('Error al cargar los proyectos:', error));

