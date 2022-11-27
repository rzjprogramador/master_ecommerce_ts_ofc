import crypto from "crypto"

export const generateString = (): string => {
  return crypto.randomBytes(10).toString("hex")
}

// console.log(generateString())
