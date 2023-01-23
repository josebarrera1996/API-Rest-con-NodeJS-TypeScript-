import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

// Definiendo el Schema 'User'
const UserSchema = new Schema<User>( // Basándose en la interface 'User' (que a su vez implementa a 'Auth')
    {
        // Propiedades
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: 'Hola, esto es una simple descripción...'
        },
        email: {
            type: String,
            required: true,
            unique: true 
        },
        password: {
            type: String,
            required: true
        },
    },
    {
        // Configuración
        timestamps: true, // Campos adicionales: createdAt & updatedAt
        versionKey: false // Omitir el campo '_v'
    }
);

// Creando el modelo
const UserModel = model('users', UserSchema);

// Exportando el modelo
export default UserModel;