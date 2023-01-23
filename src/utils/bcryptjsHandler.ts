import { hash, compare } from "bcryptjs";

// Método para encriptar la 'password'
const encrypt = async (pass: string) => {
    const passwordHash = await hash(pass, 8);
    return passwordHash;
};

// Método para realizar la comparación entre las passwords (la de texto plano y la que hasheada)
const verified = async (pass: string, passHash: string) => {
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
};

// Exportando los métodos
export { encrypt, verified };