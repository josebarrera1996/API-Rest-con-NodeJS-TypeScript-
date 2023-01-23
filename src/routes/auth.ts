import { Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";

// Definiendo el manejador de rutas
const router = Router();

/* Definiendo las rutas */
router.post('/register', registerCtrl); // Ruta para poder registrarse
router.post('/login', loginCtrl); // Ruta para poder logearse

// Exportando el enrutador
export { router };