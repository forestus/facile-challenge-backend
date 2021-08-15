import Cryptr from "cryptr";
import { inject, injectable } from "tsyringe";

import { Encrypt } from "@modules/encrypt/infra/typeORM/entities/encrypt.entity";
import { IEncryptRepository } from "@modules/encrypt/repositories/IEncryptRepository";
import { AppError } from "@shared/errors/AppError";

const cryptr = new Cryptr(process.env.HASH);
@injectable()
class FindOneEncryptUseCase {
  constructor(
    @inject("EncryptRepository")
    private encryptRepository: IEncryptRepository
  ) {}

  async execute(id: string): Promise<Encrypt> {
    const encryptAlreadyExists = await this.encryptRepository.findById(id);
    if (!encryptAlreadyExists) {
      throw new AppError("Nenhum Texto Criptografado Encontrado!", 404);
    }
    encryptAlreadyExists.name = cryptr.decrypt(encryptAlreadyExists.name);
    return encryptAlreadyExists;
  }
}

export { FindOneEncryptUseCase };
