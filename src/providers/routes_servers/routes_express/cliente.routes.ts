import { createClienteCase } from '@src/modules/participant/clientes/cases_api/create/create_cliente_case'
import { Router, Request, Response } from "express"

export default (routerCliente: Router): void => {

  routerCliente.post("/create-cliente", async (req: Request, res: Response) => {
    const entityCase = await createClienteCase(req.body)
    const response = entityCase
    return res.status(200).json(response)
  })

}
