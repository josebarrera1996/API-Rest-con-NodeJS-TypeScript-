import { Router } from "express";
import { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } from "../controllers/blogs";

// Definiendo el manejador de rutas
const router = Router();

/* Definiendo las rutas */
router.get('/', getBlogs); // Ruta para acceder a todos los 'blogs'
router.get('/:id', getBlog); // Ruta para acceder a un 'blog'
router.post('/', createBlog); // Ruta para crear un 'blog'
router.patch('/:id', updateBlog); // Ruta para actualizar a un 'blog'
router.delete('/:id', deleteBlog); // Ruta para eliminar a un 'blog'

// Exportando el enrutador
export { router };