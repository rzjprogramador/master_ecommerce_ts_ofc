import { createClienteControll } from '@src/modules/participant/clientes/cases_controll_api/create/create_cliente_controll'
import { Router, Request, Response } from "express"

export default (routerCliente: Router): void => {

  routerCliente.post("/create-cliente", async (req: Request, res: Response) => {
    const entityCase = await createClienteControll(req.body)
    const response = entityCase
    return res.status(200).json(response)
  })

}
