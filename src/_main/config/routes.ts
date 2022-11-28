import { Express, Router } from "express"
import { readdirSync } from "fs"

export const setupRoutes = (app: Express): void => {
  const router = Router()
  const usePathDiretoryExpress = `../../ServerModules/RoutesServers/RoutesExpress`

  app.use("/api", router)
  readdirSync(
    `${__dirname}/${usePathDiretoryExpress}` // LER OS ARQUIVOS :: DE ONDE ESTOU ATE >> ONDE ESTAO OS ARQUIVOS DE ROTA.
  ).map(async (fileName) => {
    ; (await import(
      `${usePathDiretoryExpress}/${fileName}`
    )).default(router)
  })
}
