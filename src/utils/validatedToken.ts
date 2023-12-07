import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.header("auth");
  if (!token) return res.status(401).json("Acceso denegado");
  try {
    jwt.verify(token, config.SECRETJWT);
  } catch (error) {
    console.error(error);
    res.status(401).json("Token inválido");
  }

  next();
};

export const sayVerifyAuth = (req: Request, res: Response) => {
  res.status(200).json("Auth Vreificated");
};
