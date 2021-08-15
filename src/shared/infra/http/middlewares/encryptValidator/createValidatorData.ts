import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";
// import { AppError } from "@shared/errors/AppError";
async function createValidatorData(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const { name } = request.body;
  const schema = Yup.object().shape({
    name: Yup.string()
      .typeError(`O campo "name" precisa ser do tipo "string"!`)
      .required(`O Campo "name" é Obrigatório!`),
  });
  await schema.validate(
    {
      name,
    },
    { abortEarly: false, strict: true }
  );

  next();
}
export { createValidatorData };
