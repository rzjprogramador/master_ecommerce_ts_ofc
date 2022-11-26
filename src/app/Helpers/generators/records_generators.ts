export const generateID = (): string => {
  return Date.now().toString()
}

export const generateIDB = (): string => {
  return Date.now().toString()
}

export function generateCodigo(): string {
  return Date.now().toString()
}

export function generateDateCreateAt(): Date {
  return new Date(Date.now())
}

export function generateDateUpdateAt(): Date {
  return new Date(Date.now())
}

export function generateRemovedAt(): Date {
  return new Date(Date.now())
}

export function generateLoggerAt(): Date {
  return new Date(Date.now())
}

export function generateIncrementNumber(): number {
  return Date.now()
}
