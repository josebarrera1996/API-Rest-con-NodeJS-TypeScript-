// Middleware para verificar si el usuario tiene una sesión activa o no
import { NextFunction, Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwtHandler";

// Método para verificar si el 'User' tiene un 'JWT'
const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop(); // 11111
        const isUser = verifyToken(`${jwt}`) as { id: string };
        if (!isUser) {
            res.status(401);
            res.send("NO_TIENES_UN_JWT_VALIDO");
        } else {
            req.user = isUser;
            next();
        }
    } catch (e) {
        console.log({ e });
        res.status(400);
        res.send("SESSION_NO_VALIDADA");
    }
};

export { checkJwt };