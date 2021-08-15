import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  console.log(defaultOptions)
  if (process.env.NODE_ENV === "production") {
    defaultOptions.host = process.env.DATABASE_HOST
    defaultOptions.username = process.env.DATABASE_USERNAME
    defaultOptions.ssl =  { rejectUnauthorized: false }
    defaultOptions.port = process.env.DATABASE_PORT
    defaultOptions.password = process.env.DATABASE_PASSWORD
    defaultOptions.database = process.env.DATABASE_NAME
    defaultOptions.entities[0] = "./src/modules/**/entities/*.js";
    defaultOptions.migrations[0] = "./src/shared/infra/typeorm/migrations/*.js";
  }
  return createConnection(Object.assign(defaultOptions, {}));
};
