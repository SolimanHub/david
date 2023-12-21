/*corregirURL();
const urlReal = window.location.href;
const nuevaURL = "/david-soliman";

// Utilizando una expresión regular
const terminaEnDavid = /david\/$/.test(urlReal);
var direccionFetch = "";
    if (terminaEnDavid) {
      direccionFetchMenu = 'recursos/html/menu.html';
      direccionFetchFooter = 'recursos/html/footer.html';
    }else{
      direccionFetchMenu = '../recursos/html/menu.html';
      direccionFetchFooter = '../recursos/html/footer.html';
    }
// Llama a la función para cargar el menú al cargar la página
function loadMenu() {
    fetch(direccionFetchMenu)
        .then(response => response.text())
        .then(menuContent => {
            const menuContainer = document.getElementById('header');
            menuContainer.innerHTML = menuContent;
        })
        .catch(error => console.error('Error al cargar el menú:', error));
}
window.addEventListener('load', loadMenu);
// Llama a la función para cargar el footer al cargar la página
function loadFooter() {
  console.log("load footer");
    fetch(direccionFetchFooter)
        .then(response => response.text())
        .then(menuContent => {
            const menuContainer = document.getElementById('footer');
            menuContainer.innerHTML = menuContent;
        })
        .catch(error => console.error('Error al cargar el footer:', error));
}
window.addEventListener('load', loadFooter);

function corregirURL() {
  var url = window.location.href;
  const regex = /#$/;
  if (regex.test(url)) {
    url = url.replace(regex, '');
    console.log("nueva url"+ url);
    //window.location.href = url;
    history.pushState(null, "", url);
  }
}

// Enmascarar URL
//history.pushState(null, "", nuevaURL);

//Botones del menu
const contenedor = document.getElementById("header");
contenedor.addEventListener("click", function(event) {

  if (event.target.id === "menu_home") {
    const terminaEnDavid = /david\/$/.test(urlReal);
    if (!terminaEnDavid) {
      window.location.href = "/david/";
    }
    corregirURL();
  }
  if (event.target.id === "menu_blog") {
    const terminaEnBlog = /blog\.html$/.test(urlReal);
    if (!terminaEnBlog) {
      window.location.href = "/david/paginas/blog.html";
    }
    corregirURL();
  }
});
*/
