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
});
