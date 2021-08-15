import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { CreateEncryptUseCase } from "./createEncryptUseCase";

class CreateEncryptController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const createEncryptUseCase = container.resolve(CreateEncryptUseCase);

    try {
      const encrypted = await createEncryptUseCase.execute({
        name,
      });

      return response.status(201).json({
        id: encrypted.id,
        encryped_name: encrypted.name,
      });
    } catch (error) {
      throw new AppError(error);
    }
  }
}

export { CreateEncryptController };
