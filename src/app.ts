/* Archivo principal de la aplicación */

import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import db from './config/mongo';

// Definiendo el PUERTO
const PORT = process.env.PORT || 3001;

// Instanciando a Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Implementando las rutas
app.use(router); // http://localhost:3002 + enrutadores distintos a 'index.ts'


// Implementando la conexión
db().then(() => {

    console.log('Conexión exitosa con la B.D');
    
    // Dando inicio al servidor (levantarlo)
    app.listen(PORT, () => {
        console.log(`Listo por el puerto ${PORT}`);
    });
});


