/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { ValidationError } from "yup";

import { AppError } from "@shared/errors/AppError";

async function errorMiddleware(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response> {
  if (err instanceof AppError) {
    if (err.statusCode === 404) {
      return response.status(err.statusCode).json({
        code: `E_NOT_FOUND`,
        message: `${err.message}`,
      });
    }
    return response.status(err.statusCode).json({ message: err.message });
  }
  if (err instanceof ValidationError) {
    return response.status(400).json({
      code: `E_VALIDATION_FAILURE`, // aqui é possível mapear os erros atravez de algum objeto para padronização.
      message: `${err.errors}`,
    });
  }
  return response.status(500).json({
    status: "error",
    message: `${err.message}`,
  });
}
export { errorMiddleware };
