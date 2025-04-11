const express = require('express');
const app = express();

app.use(express.json());

// Lista en memoria para almacenar productos
let productos = [];

// Ruta para agregar productos
app.post('/agregar', (req, res) => {
    const { nombre, precio } = req.body;
    const producto = {
        id: productos.length + 1,
        nombre,
        precio
    };
    productos.push(producto);
    res.status(201).json({ mensaje: 'Producto agregado', producto });
});

// Ruta para listar productos
app.get('/listar', (req, res) => {
    res.json(productos);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/*
-----------------------------------------------------------
Comentario final:
Esta implementación es monolítica porque:
- Toda la lógica (servidor, rutas, almacenamiento en memoria y lógica de negocio)
  está contenida en un único archivo (app.js).
- No existe separación de capas ni modularización.

Desventajas:
- Si la aplicación crece, este archivo será difícil de mantener.
- La estructura no permite trabajar cómodamente en equipo ni escalar fácilmente.
- Es más difícil de testear y reutilizar el código en otros contextos.
*/