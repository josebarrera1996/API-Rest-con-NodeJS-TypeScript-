import { Router } from "express";
import { getItems, getItem, createItem, updateItem, deleteItem } from "../controllers/cars";
// import { logMiddleware } from "../middlewares/log";
import { checkJwt } from "../middlewares/session";


// Definiendo el manejador de rutas
const router = Router();

/* Definiendo las rutas */
router.get('/', checkJwt, getItems); // Ruta para acceder a todos los 'cars'
router.get('/:id', checkJwt, getItem); // Ruta para acceder a un 'car'
router.post('/', checkJwt, createItem); // Ruta para crear un 'car'
router.patch('/:id', checkJwt, updateItem); // Ruta para actualizar a un 'car'
router.delete('/:id', checkJwt, deleteItem); // Ruta para eliminar a un 'car'

// Exportando el enrutador
export { router };