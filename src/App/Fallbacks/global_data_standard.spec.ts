import { globalAppFakes } from "@src/App/Fallbacks/GlobalAppFakes"

import { describe, expect, test } from "vitest"

describe("globalDataStandard", () => {
  test(`globalDataStandard dados atuais`, () => {
    const sut = globalAppFakes
    expect(sut.minTextValidGlobal).toEqual(2)
    expect(sut.maxTextPrimeiroNome).toEqual(70)
  })

  test(`nao deve ter esses dados a fonte de dados globalDataStandard`, () => {
    const sut = globalAppFakes
    expect(sut.minTextValidGlobal).not.toBeFalsy()
    expect(sut.maxTextPrimeiroNome).not.toBeFalsy()
  })
})
