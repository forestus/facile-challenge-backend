import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  if (process.env.NODE_ENV === "production") {
    defaultOptions.entities[0] = "./src/modules/**/entities/*.js";
    defaultOptions.migrations[0] = "./src/shared/infra/typeorm/migrations/*.js";
  }
  return createConnection(Object.assign(defaultOptions, {}));
};
