// En este archivo se desarrollará la lógica para registrar y logear un usuario, que posteriormente será implementada en su respectivo controlador
import { User } from "../interfaces/user.interface";
import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcryptjsHandler";
import { generateToken } from "../utils/jwtHandler";

// Método para poder realizar un registro
const registerNewUser = async (user: User) => {
    // Verificar si el usuario ya existe...
    const checkExists = await UserModel.findOne({ email: user.email });
    // Si ya existe...
    if (checkExists) return 'USER_ALREADY_EXISTS';
    /* Si no existe... */
    // Realizar el hashing a la password
    const password = user.password;
    const passHash = await encrypt(password);
    // Insertar un nuevo registro a la B.D
    const newUser = await UserModel.create({ email: user.email, password: passHash, name: user.name });
    return newUser;
};

// Método para poder realizar un login
const loginUser = async (auth: Auth) => {
    // Chequear si el usuario existe...
    const checkExists = await UserModel.findOne({ email: auth.email });
    // Si no existe...
    if (!checkExists) return "NOT_FOUND_USER";
    /* Si existe */
    // Traer la password que encriptada
    const passwordHash = checkExists.password;
    // Verificar que ambas password's coincidan...
    const isCorrect = await verified(auth.password, passwordHash);
    // Si no es correcto...
    if (!isCorrect) return "PASSWORD_INCORRECT";
    /* Si todo fue correcto */
    // Generar el token
    const token = generateToken(checkExists.email);
    // Preparar el objeto para la respuesta
    const data = {
        token,
        user: checkExists,
    };
    return data;
}

// Exportando los métodos
export { registerNewUser, loginUser };
