import { Router } from "express";

import { CreateEncryptController } from "@modules/encrypt/useCase/createEncrypt/createEncryptController";
import { FindOneEncryptController } from "@modules/encrypt/useCase/findOneEncrypt/findOneEncryptController";

import { createValidatorData } from "../middlewares/encryptValidator/createValidatorData";
import { findOneValidatorData } from "../middlewares/encryptValidator/findOneValidatorData";

const createEncriptController = new CreateEncryptController();
const findOneEncriptController = new FindOneEncryptController();
const encriptsRouting = Router();

encriptsRouting.post("/", createValidatorData, createEncriptController.handle);
encriptsRouting.get(
  "/:id",
  findOneValidatorData,
  findOneEncriptController.handle
);

export { encriptsRouting };
