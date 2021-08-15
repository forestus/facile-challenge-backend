import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
// import { AppError } from "@shared/errors/AppError";
async function findOneValidatorData(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const { id } = request.params;
  const schema = yup.object().shape({
    id: yup.string().uuid(`O campo "id" precisa ser do tipo "uuid"!`),
  });
  await schema.validate({ id }, { abortEarly: false, strict: true });

  next();
}
// precisa ser do tipo string
export { findOneValidatorData };
