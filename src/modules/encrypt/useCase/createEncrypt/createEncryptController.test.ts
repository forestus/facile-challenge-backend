import { testServer } from "@shared/infra/http/server.spec";

describe("Create Encrypt Controller", () => {
  it("Should be able to create a new Encrypt", async () => {
    const response = await testServer.post("/encryptions").send({
      name: "Test Integration",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Should not be able to create an user with invalid type name", async () => {
    const response = await testServer.post("/encryptions").send({
      name: 123,
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("code");
  });
  it("Should be not abre to create a new Encrypt without name field", async () => {
    const response = await testServer.post("/encryptions");

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("code");
  });
});
