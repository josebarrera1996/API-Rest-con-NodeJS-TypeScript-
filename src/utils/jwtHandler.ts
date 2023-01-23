import { sign, verify } from "jsonwebtoken";

// Alojando en una constante la variable de entorno
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

// Método para generar un token y posteriormente firmarlo
const generateToken = (id: string) => {
    // El 'payload' será el 'id' del 'User'
    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: "2h", // El token expirará en '2 horas'
    });
    return jwt;
};

// Método para verificar que el token coincida con el usuario logeado
const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
};

export { generateToken, verifyToken }