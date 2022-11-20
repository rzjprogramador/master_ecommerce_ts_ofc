import request from "supertest"
import app from "@src/_main/config/app"

import { describe, test, expect } from "vitest"

describe("body parser", () => {
  test(`deve fazer o parser json.`, async () => {
    app.post("/test_body_parser", (req, res) => {
      res.send(req.body)
    })
    await request(app).post("/test_body_parser").send({ nome: "Reinaldo" })
    expect({ nome: "Reinaldo" })
  })
})
