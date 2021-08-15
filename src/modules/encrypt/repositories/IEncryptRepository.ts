import { ECreateEncryptDTO } from "../dtos/CreateEncrypt";
import { Encrypt } from "../infra/typeORM/entities/encrypt.entity";

interface IEncryptRepository {
  create(data: ECreateEncryptDTO): Promise<Encrypt>;
  findById(id: string): Promise<Encrypt>;
}

export { IEncryptRepository };
