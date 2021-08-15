import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindOneEncryptUseCase } from "./findOneEncryptUseCase";

class FindOneEncryptController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findOneEncryptUseCase = container.resolve(FindOneEncryptUseCase);

    const encrypted = await findOneEncryptUseCase.execute(id);

    return response.status(200).json({
      name: encrypted.name,
    });
  }
}

export { FindOneEncryptController };
