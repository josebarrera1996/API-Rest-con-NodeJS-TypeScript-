import { NextFunction, Request, Response } from "express";

// Middleware para constatar desde qué navegador o qué cliente está realizando peticiones
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers;
    const userAgent = headers["user-agent"];
    console.log('user-agent', userAgent);
    next();
};

export { logMiddleware };