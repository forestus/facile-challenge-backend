import { Repository, getRepository } from "typeorm";

import { ECreateEncryptDTO } from "@modules/encrypt/dtos/CreateEncrypt";
import { IEncryptRepository } from "@modules/encrypt/repositories/IEncryptRepository";
import { AppError } from "@shared/errors/AppError";

import { Encrypt } from "../entities/encrypt.entity";

class EncryptRepository implements IEncryptRepository {
  private encryptRepository: Repository<Encrypt>;

  constructor() {
    this.encryptRepository = getRepository(Encrypt);
  }

  async create({ name }: ECreateEncryptDTO): Promise<Encrypt> {
    try {
      const encrypt = this.encryptRepository.create({
        name,
      });
      const encryptedData = await this.encryptRepository.save(encrypt);
      return encryptedData;
    } catch (error) {
      throw new AppError(error.message, 400);
    }
  }

  async findById(id: string): Promise<Encrypt> {
    const encrypted = await this.encryptRepository.findOne({
      id,
    });
    return encrypted;
  }
}

export { EncryptRepository };
