/* Archivo para crear las rutas de la aplicación */

import { Router } from "express";
import { readdirSync } from 'fs';

// Definiendo el path del enrutador
const PATH_ROUTER = `${__dirname}`; // Nos devuelve la ruta del directorio actual

// Definiendo el enrutador
const router = Router();

// Función para quitar las extensiones de los archivos y devolverlos en un arreglo
const cleanFileName = (fileName: string) => {

    // Lógica para remover las extensiones
    const file = fileName.split('.').shift();

    return file;
}

// Función que leerá los archivos que se encuentran en el directorio de 'routes'
// Nos devolverá un arreglo con el nombre de los archivos, al cual se le aplicarán filtros
readdirSync(PATH_ROUTER).filter((fileName) => {

    // Aplicando el método para obtener los nombres de los archivos sin sus extensiones
    const cleanName = cleanFileName(fileName);

    // Comprobar que no se tome en cuenta el archivo 'index' y solo se muestren los demás
    if (cleanName !== 'index') {

        console.log(cleanName);

        // Implementando el enrutador de forma dinámica
        // Esto quiere decir que los prefijos de las rutas estarán definidos por los nombres de los archivos
        import(`./${cleanName}`).then((moduleRoute) => {

            // Esta promesa nos devolverá el módulo de la ruta, la cual la implementaremos ahora
            console.log(`Se está cargando la ruta... /${cleanName}`);
            router.use(`/${cleanName}`, moduleRoute.router); // http://localhost:3002 + enrutadores de los archivos

        })
    }
})

// Exportando el enrutador
export { router };