/* En este archivo estarán los métodos típicos de un CRUD */

import { Request, Response } from "express";
import { handleHttp } from "../utils/errorHandler";

/* Definiendo los métodos */
const getBlogs = (req: Request, res: Response) => { // Método para traer todos los 'blogs'
    try {

    } catch (error) {
        // Invocando el manejador de errores
        handleHttp(res, 'ERROR_GET_BLOGS');
    }
};

const getBlog = (req: Request, res: Response) => { // Método para traer un 'blog'
    try {

    } catch (error) {
        // Invocando el manejador de errores
        handleHttp(res, 'ERROR_GET_BLOG');
    }
};

const createBlog = (req: Request, res: Response) => { // Método para crear un 'blog'
    try {
        const { body } = req;
        res.send(body);
    } catch (error) {
        // Invocando el manejador de errores
        handleHttp(res, 'ERROR_CREATE_BLOG');
    }
};

const updateBlog = (req: Request, res: Response) => { // Método para eliminar un 'blog'
    try {

    } catch (error) {
        // Invocando el manejador de errores
        handleHttp(res, 'ERROR_UPDATE_BLOG');
    }
};


const deleteBlog = (req: Request, res: Response) => { // Método para eliminar a un 'blog'
    try {

    } catch (error) {
        // Invocando el manejador de errores
        handleHttp(res, 'ERROR_DELETE_BLOG');
    }
};

// Exportando estos métodos
export { getBlogs, getBlog, createBlog, updateBlog, deleteBlog };

