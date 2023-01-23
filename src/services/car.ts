// En este archivo se desarrollará la lógica de un CRUD que posteriormente será implementada en su respectivo controlador

import { Car } from "../interfaces/car.interface";
import CartModel from '../models/car';

// Método para traer los 'cars'
const getCars = async () => {
    const cars = await CartModel.find({});
    return cars;
};

// Método para traer un 'car'
const getCar = async (id: string) => {
    const car = await CartModel.findOne({ _id: id });
    return car;
};

// Método para insertar un 'car'
const insertCar = async (car: Car) => {
    const newCar = await CartModel.create(car);
    return newCar;
};

// Método para actualizar un 'car'
const updateCar = async (id: string, car: Car) => {
    const updatedCar = await CartModel.findOneAndUpdate({ _id: id }, car, {
        new: true // Nos devolverá el item actualizado y no el anterior
    });
    return updatedCar;
};

// Método para eliminar un 'car'
const deleteCar = async (id: string) => {
    const deletedCar = await CartModel.remove({ _id: id });
    return deletedCar;
};


// Exportando los métodos
export { getCars, getCar, insertCar, updateCar, deleteCar };
