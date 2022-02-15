import supertest from "supertest";

import app from "../server.js";

describe("POST /converter/<targetCurrency>", () => {
  it("should convert GBP > USD", async () => {
    const res = await supertest(app).post("/USD").send({ GBP: 100 });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ USD: 127.28 });
  });

  it("should convert EUR > GBP", async () => {
    const res = await supertest(app).post("/GBP").send({ EUR: 100 });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ GBP: 89.47 });
  });

  it("should convert and sum multiple currencies in a request", async () => {
    const res = await supertest(app)
      .post("/CAD")
      .send({ EUR: 13.12, GBP: 99 })
      .set("Accept", "application/json");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ CAD: 185.64 });
  });
});
