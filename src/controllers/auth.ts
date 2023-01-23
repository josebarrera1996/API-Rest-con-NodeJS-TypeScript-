/* En este archivo estarán los métodos típicos para realizar un registro o logeo */

import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";
import { handleHttp } from "../utils/errorHandler";

/* Definiendo los métodos */
const registerCtrl = async (req: Request, res: Response) => { // Método para registrarse
    try {
        // Obteniendo lo desarrollado en el 'body' del Request
        const body = req.body;
        // Invocando el servicio
        const responseUser = await registerNewUser(body);
        // Enviando la respuesta
        res.send(responseUser);
    } catch (error) {
        // Invocando el manejador de errores
        handleHttp(res, 'ERROR_REGISTER_USER', error);
    }
};

const loginCtrl = async (req: Request, res: Response) => { // Método para logearse
    try {
        // Obteniendo 'email, password' del 'body' del Request
        const { email, password } = req.body;
        // Invocando el servicio
        const responseUser = await loginUser({ email, password });

        if (responseUser === "PASSWORD_INCORRECT") { // En caso de error en la coincidencia entre las password's...
            res.status(403);
            res.send(responseUser);
        } else { // Si todo salió bien...
            res.send(responseUser);
        }
    } catch (error) {
        // Invocando el manejador de errores
        handleHttp(res, 'ERROR_LOGIN_USER', error);
    }
};

// Exportando los métodos
export { registerCtrl, loginCtrl }