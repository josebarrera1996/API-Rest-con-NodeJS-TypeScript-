// HELPER
// Nos ayudará a trazar los errores obtenidos en el lado del servidor

import { Response } from "express";

// Método para manejar los errores HTTP
const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    res.status(500);
    res.send({ error }); // Devuelvo el objeto 'error'
};

// Exportando este método
export { handleHttp };