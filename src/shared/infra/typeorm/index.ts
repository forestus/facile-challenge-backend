import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  if (process.env.NODE_ENV === "production") {
    return createConnection(
      Object.assign(defaultOptions, {
        host: process.env.DATABASE_HOST,
        ssl: { rejectUnauthorized: false },
        username: process.env.DATABASE_USERNAME,
        port: process.env.DATABASE_PORT,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [`./src/modules/**/entities/*.js`],
        migrations: [`./src/shared/infra/typeorm/migrations/*.js`],
      })
    );
  }
  return createConnection(Object.assign(defaultOptions, {}));
};
