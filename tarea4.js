import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Nombre: german, Apellido: martini');
});

app.get('/materia', (req, res) => {
  res.send('Materia: Programación Web');
});

app.get('/profesor', (req, res) => {
  res.send('Profesor: Juan Pérez');
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
