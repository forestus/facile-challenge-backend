/* eslint-disable import/order */
import "express-async-errors";
import "reflect-metadata";
import "../../container";

import cors from "cors";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerJsDoc, { Options } from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { Connection } from "typeorm";

import swaggerConfig from "../../../../swaggerConfig.json";
import createConnection from "../typeorm";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { router } from "./routes";

dotenv.config();

// Configuração do Swagger
if (process.env.PORT) {
  swaggerConfig.swaggerDefinition.servers[0].url = `http://localhost:${process.env.PORT}`;
  swaggerConfig.apis[0] = "../docs/Encrypt/*.yml";
}
const swaggerOptions: Options = swaggerConfig;
const swaggerDocs = swaggerJsDoc(swaggerOptions);

async function connectToDB(): Promise<Connection> {
  const connection = await createConnection();
  return connection;
}

function server(): Application {
  const app: Application = express();
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
  app.get("/", (request: Request, response: Response) => {
    response.redirect("/api-docs");
  });
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(morgan("tiny"));
  app.use(router);
  app.use(errorMiddleware);
  return app;
}

export default server();
export { connectToDB };
