import express from "express";
import dotenv from "dotenv";
import routerAPI from "./routes/index.js";
import db from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>API de Cervezas</title>
            <style>
                body { font-family: Arial, sans-serif; }
                footer { margin-top: 20px; }
            </style>
        </head>
        <body>
            <h1>Bienvenido a la API de Cervezas</h1>
            <p>Esta API permite gestionar cervezas y obtener información relacionada a las mismas.</p>
            <h2>Endpoints:</h2>
            <ul>
                <li><a href="/beers">Obtener todas las cervezas</a></li>
                <li><a href="/beers/67042b0e2cd26ace6da5e8a6">Obtener cerveza por ID</a></li>
                <li><a href="/beers">Crear nueva cerveza (POST)</a></li>
                <li><a href="/beers/67042b0e2cd26ace6da5e8a6">Actualizar cerveza por ID (PUT)</a></li>
                <li><a href="/beers/67042b0e2cd26ace6da5e8a6">Eliminar cerveza por ID (DELETE)</a></li>
            </ul>
            <footer>
                <p>Nombre y Apellido: Luciano Baldoni</p>
                <p>Materia: Aplicaciones Híbridas</p>
                <p>Docente: Camila Belén Marcos Galván</p>
                <p>Comisión: DWN4AP</p>
            </footer>
        </body>
        </html>
    `);
});

routerAPI(app);
app.listen(port, () => { 
    console.log(`Servidor en el puerto ${port}`);
});
