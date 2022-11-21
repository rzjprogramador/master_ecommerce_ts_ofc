import { describe, test, expect } from "vitest"

//
/* DEFAULTS */
//
export const defaultExpression = "Ops!"
export const caracteresEspeciaisNotDescricoes = "#+-*"
export const caracteresAceitosEmail = "@"
export const statusSucessDefault200 = 200
export const statusBadRequest400 = 400
export const statusUnauthorized401 = 401
export const statusNotfound404 = 404

const incorrectSolicitation = "Preencha corretamente o campo:"
const missingField = "Esta faltando a variavel:"

//
/* USANDO AS DEFINICOES ACIMA > OUTPUT FEEDBACKS DA APP  */
//

export const feedbackInvalidParam = `${defaultExpression} ${incorrectSolicitation}`

export const feedbackMissingParam = `${defaultExpression} ${missingField}`

//
/* ---------------------- // ---------------------- */
//

describe("singlePoloFeedbacks :: messageDefaultBaseApiError", () => {
  test(`deve retornar uma mensagem default para todos errors customizados`, () => {
    const sut = defaultExpression
    const output = "Ops!"
    expect(output).toBe(sut)
  })
})

describe("singlePoloFeedbacks :: caracteresEspeciaisNotDescricoes", () => {
  test(`deve retornar o polo unico de caracteres especiais nao aceitos em textos de descricoes`, () => {
    const sut = caracteresEspeciaisNotDescricoes
    const output = "#+-*"
    expect(output).toBe(sut)
  })
})

describe("singlePoloFeedbacks :: caracteresAceitosEmail", () => {
  test(`deve retornar o polo unico de caracteres especiais aceitos em todos campos email`, () => {
    const sut = caracteresAceitosEmail
    const output = "@"
    expect(output).toBe(sut)
  })
})

describe("singlePoloFeedbacks :: statusBadRequest400", () => {
  test(`deve retornar o polo unico statusCode para badRequest 400`, () => {
    const sut = statusBadRequest400
    const output = 400
    expect(output).toBe(sut)
  })
})
