import { Schema, model } from "mongoose";
import { Car } from "../interfaces/car.interface";

// Definiendo el Schema 'Cars'
const CarSchema = new Schema<Car>( // Basándose en la interface 'Car'
    {
        // Propiedades
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        gas: {
            type: String,
            enum: ['gasoline', 'electric'],
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        // Configuración
        timestamps: true, // Campos adicionales: createdAt & updatedAt
        versionKey: false // Omitir el campo '_v'
    }
);

// Creando el modelo
const CarModel = model('cars', CarSchema);

// Exportando el modelo
export default CarModel;