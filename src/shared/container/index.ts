import { container, delay } from "tsyringe";

import { EncryptRepository } from "@modules/encrypt/infra/typeORM/repositories/encryptRepository";
import { IEncryptRepository } from "@modules/encrypt/repositories/IEncryptRepository";

container.registerSingleton<IEncryptRepository>(
  "EncryptRepository",
  delay(() => EncryptRepository)
);
