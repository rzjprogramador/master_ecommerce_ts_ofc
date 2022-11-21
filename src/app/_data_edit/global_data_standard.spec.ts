import { globalDataStandard } from "@src/app/_data_edit/global_data_standard"

import { describe, expect, test } from "vitest"

describe("globalDataStandard", () => {
  test(`globalDataStandard dados atuais`, () => {
    const sut = globalDataStandard
    expect(sut.minTextValidGlobal).toEqual(2)
    expect(sut.maxTextPrimeiroNome).toEqual(70)
  })

  test(`nao deve ter esses dados a fonte de dados globalDataStandard`, () => {
    const sut = globalDataStandard
    expect(sut.minTextValidGlobal).not.toBeFalsy()
    expect(sut.maxTextPrimeiroNome).not.toBeFalsy()
  })
})
