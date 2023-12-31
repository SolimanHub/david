const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.static('public'));
// Usar el middleware body-parser para parsear el cuerpo de las peticiones JSON
app.use(bodyParser.json()); //Importante esta linea
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', './public/views');

app.get('/', (req, res) => {
  fs.readFile('./public/assets/elementos/proyectos.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al leer el archivo de proyectos');
    }
    const proyectos = JSON.parse(data);
    res.render('index', { proyectos: proyectos });
  });
});
app.get('/blog', (req, res) => {
  res.render('blog');
});
app.get('/aplicaciones', (req, res) => {
  res.render('aplicaciones');
});
app.get('/descargas', (req, res) => {
  res.render('descargas');
});
app.get('/galeria', (req, res) => {
  res.render('galeria');
});
app.get('/contacto', (req, res) => {
  res.render('contacto');
});

app.get('/hora', (req, res) => {
  let ahora = new Date();
  let hora = ahora.toLocaleString();
  res.send(hora);
});

// Definir una ruta POST para recibir los datos del formulario
app.post("/enviar", function(req, res) {
    // Obtener el nombre y el apellido del cuerpo de la petición
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    let mensaje="";
    // Crear un mensaje con el nombre y el apellido recibidos
    if(!nombre || !apellido){
      mensaje = "Error en los datos.";
    }else{
      mensaje = "Hola, " + nombre + " " + apellido + ". Gracias por enviar tus datos.";
    }
    res.send(mensaje);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
