import express from 'express';

const app = express();
const PORT = 3000;

const peliculasFavoritas = ['The Shawshank Redemption', 'Fight Club', 'Pulp Fiction', 'The Godfather', 'The Lord of the Rings'];

app.get('/', (req, res) => {
  res.send('Nombre: german, Apellido: martini');
});

app.get('/materia', (req, res) => {
  res.send('Materia: Programación Web');
});

app.get('/profesor', (req, res) => {
  res.send('Profesor: Juan Pérez');
});

app.get('/peliculas/:nombre', (req, res) => {
  const peliculaBuscada = req.params.nombre;

  if (peliculasFavoritas.includes(peliculaBuscada)) {
    res.send(`La película seleccionada "${peliculaBuscada}" ya está en favoritos.`);
  } else {
    res.status(404).send('404 – película no encontrada');
  }
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
