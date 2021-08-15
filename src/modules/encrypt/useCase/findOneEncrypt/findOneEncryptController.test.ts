import { v4 as uuid } from "uuid";

import { testServer } from "@shared/infra/http/server.spec";

describe("FindOne Encrypt Controller", () => {
  it("Should be able to find one Encrypt by id", async () => {
    const encrypedResponse = await testServer.post("/encryptions").send({
      name: "Test Integration",
    });

    expect(encrypedResponse.body).toHaveProperty("id");

    const response = await testServer.get(
      `/encryptions/${encrypedResponse.body.id}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name");
  });

  it("Should not be able to find one encrypt with invalid uuid", async () => {
    const response = await testServer.get("/encryptions/1").send();

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("code");
  });

  it("Should be not abre to find one Encrypt if this does not exists", async () => {
    const response = await testServer.get(`/encryptions/${uuid()}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("code");
  });
});
