import { createClienteFisicoControll } from '@src/modules/clientes/cliente_fisico/cases_controll_api/create/controll/create_cliente_fisico_controll'
import { Router, Request, Response } from "express"

export default (routerClienteFisico: Router): void => {

  routerClienteFisico.post("/create-cliente-fisico", async (req: Request, res: Response) => {
    const entityCase = await createClienteFisicoControll(req.body)
    const response = entityCase
    return res.status(200).json(response)
  })

}
