import request from "supertest"
import app from "@src/_main/config/app"

import { describe, test, expect } from "vitest"

describe("cors", () => {
  test(`deve habilitar o cors livre para aceitar requisicoes de qualquer origem sem restricoes.`, async () => {
    app.get("/test_cors", (req, res) => {
      res.send()
    })
    await request(app).get("/test_cors")
    expect("acess-control-allow-origin", "*")
    expect("acess-control-allow-methods", "*")
    expect("acess-control-allow-headers", "*")
  })
})
