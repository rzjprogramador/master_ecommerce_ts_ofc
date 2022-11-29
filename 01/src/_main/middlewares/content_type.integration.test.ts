import request from "supertest"
import app from "@src/_main/config/app"

import { describe, test, expect } from "vitest"

describe("content-type", () => {
  test(`deve retornar como default o content-type como json`, async () => {
    app.get("/test_content_type", (req, res) => {
      res.send("")
    })
    await request(app).get("/test_content_type")
    expect("content-type", "json") // TENTAR USAR REGEX /json/
  })

  test(`deve retornar forcado o content-type como xml`, async () => {
    app.get("/test_content_type_xml", (req, res) => {
      res.type("xml")
      res.send("")
    })
    await request(app).get("/test_content_type_xml")
    expect("content-type", "xml") // TENTAR USAR REGEX /xmll/
  })
})
