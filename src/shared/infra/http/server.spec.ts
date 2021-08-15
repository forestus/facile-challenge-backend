// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from "supertest";
import { Connection } from "typeorm";

import server, { connectToDB } from "./server";

const testServer = supertest(server);
let connection: Connection;

beforeAll(async () => {
  connection = await connectToDB();
});
afterAll(async () => {
  await connection.synchronize(true);
  await connection.close();
});
beforeEach(async () => {
  const entities = connection.entityMetadatas;

  entities.forEach(async (entity) => {
    const repository = connection.getRepository(entity.name);
    await repository.query(`DELETE FROM ${entity.tableName}`);
  });
});

export { testServer };
