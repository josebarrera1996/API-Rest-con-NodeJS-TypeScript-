/* En este archivo desarrollaremos la lógica necesaria para conectarnos a una B.D de MongoDB */

import 'dotenv/config';
import { connect } from 'mongoose';

// Realizando la conexión
async function dbConnect(): Promise<void> {

    // Alojando en esta constante la variable de entorno
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
};

// Exportando la conexión
export default dbConnect;
