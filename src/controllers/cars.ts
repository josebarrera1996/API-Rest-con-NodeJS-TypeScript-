/* En este archivo estarán los métodos típicos de un CRUD con respecto a 'Cars' */

import { Request, Response } from "express";
import { handleHttp } from "../utils/errorHandler";
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/car";

/* Definiendo los métodos */
const getItems = async (req: Request, res: Response) => { // Método para traer todos los 'items'
    try {
        // Invocando el servicio
        const allCars = await getCars();
        // Enviando la respuesta obtenida
        res.send(allCars);
    } catch (error) {
        // Invocando el manejador de errores
        handleHttp(res, 'ERROR_GET_ITEMS', error);
    }
};

const getItem = async (req: Request, res: Response) => { // Método para traer un 'item'
    try {
        // Obteniendo el parámetro 'id'
        const { id } = req.params;
        // Invocando el servicio
        const oneCar = await getCar(id);
        // Enviando la respuesta
        res.send(oneCar);
    } catch (error) {
        // Invocando el manejador de errores
        handleHttp(res, 'ERROR_GET_ITEM', error);
    }
};

const createItem = async (req: Request, res: Response) => { // Método para crear un 'item'
    try {
        // Obteniendo lo colocado en el 'body'
        const { body } = req;
        // Invocando el servicio
        const createdCar = await insertCar(body);
        // Enviando la respuesta
        res.send(createdCar);
    } catch (error) {
        // Invocando el manejador de errores
        handleHttp(res, 'ERROR_CREATE_ITEM', error);
    }
};

const updateItem = async (req: Request, res: Response) => { // Método para eliminar un 'item'
    try {
        // Obteniendo el parámetro 'id'
        const { id } = req.params;
        // Obteniendo lo colocado en el 'body'
        const { body } = req;
        // Invocando el servicio
        const updatedCar = await updateCar(id, body);
        // Enviando la respuesta
        res.send(updatedCar);
    } catch (error) {
        // Invocando el manejador de errores
        handleHttp(res, 'ERROR_UPDATE_ITEM', error);
    }
};


const deleteItem = async (req: Request, res: Response) => { // Método para eliminar a un 'item'
    try {
        // Obteniendo el parámetro 'id'
        const { id } = req.params;
        // Invocando el servicio
        const deletedCar = await deleteCar(id);
        // Enviando la respuesta
        res.send(deletedCar);
    } catch (error) {
        // Invocando el manejador de errores
        handleHttp(res, 'ERROR_DELETE_ITEM', error);
    }
};

// Exportando estos métodos
export { getItems, getItem, createItem, updateItem, deleteItem };

