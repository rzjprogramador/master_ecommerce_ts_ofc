import { createClientepfControll } from '@src/modules/clientes/Clientepf/ControllCases/Create/Controll/CreateClientepfControll'
import { Router, Request, Response } from "express"

export default (routerClienteFisico: Router): void => {

  routerClienteFisico.post("/create-cliente-fisico", async (req: Request, res: Response) => {
    const entityCase = await createClientepfControll(req.body)
    const response = entityCase
    return res.status(200).json(response)
  })

}
