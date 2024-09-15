import express from 'express';

const app = express();
const PORT = 3001; 

const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200 },
  { id: 2, nombre: 'Teléfono', precio: 800 },
  { id: 3, nombre: 'Teclado', precio: 50 },
  { id: 4, nombre: 'Monitor', precio: 300 },
  { id: 5, nombre: 'Mouse', precio: 25 },
  { id: 6, nombre: 'Impresora', precio: 150 },
  { id: 7, nombre: 'Tablet', precio: 500 },
  { id: 8, nombre: 'Cámara', precio: 700 },
  { id: 9, nombre: 'Auriculares', precio: 100 },
  { id: 10, nombre: 'Micrófono', precio: 90 }
];

app.get('/productos', (req, res) => {
  const { id, min, max } = req.query;

  if (id) {
    const producto = productos.find(p => p.id === parseInt(id));
    if (producto) {
      return res.json(producto);
    } else {
      return res.status(404).send('404 – Producto no encontrado');
    }
  }

  let productosFiltrados = productos;

  if (min) {
    productosFiltrados = productosFiltrados.filter(p => p.precio >= parseInt(min));
  }
  if (max) {
    productosFiltrados = productosFiltrados.filter(p => p.precio <= parseInt(max));
  }

  res.json(productosFiltrados);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
