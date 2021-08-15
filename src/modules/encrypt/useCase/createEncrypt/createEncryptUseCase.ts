import { inject, injectable } from "tsyringe";

import { Encrypt } from "@modules/encrypt/infra/typeORM/entities/encrypt.entity";
import { IEncryptRepository } from "@modules/encrypt/repositories/IEncryptRepository";
// import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
}

@injectable()
class CreateEncryptUseCase {
  constructor(
    @inject("EncryptRepository")
    private encryptRepository: IEncryptRepository
  ) {}

  async execute({ name }: IRequest): Promise<Encrypt> {
    return this.encryptRepository.create({
      name,
    });
  }
}

export { CreateEncryptUseCase };
