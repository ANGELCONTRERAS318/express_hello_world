require("dotenv").config(); // Carga las variables de entorno

const { neon } = require("@neondatabase/serverless"); // Importa Neon
const express = require('express'); // Importa Express
const app = express(); // Crea la instancia de Express
const port = 3000; // Define el puerto
const sql = neon(process.env.DATABASE_URL); // Conexión a Neon con la URL de la base de datos

// Servir los archivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Endpoint para obtener las tareas
app.get('/api/tareas', async (req, res) => {
    try {
        const result = await sql`SELECT * FROM tbl_tareas`; // Consulta SQL
        res.json(result); // Envía las tareas como respuesta en formato JSON
    } catch (error) {
        console.error("Error al obtener las tareas:", error);
        res.status(500).json({ message: "Error al obtener las tareas" });
    }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port}`);
});
