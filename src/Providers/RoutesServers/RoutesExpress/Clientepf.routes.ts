import { createClientepfControll } from '@src/Modules/Clientes/Clientepf/ControllCases/CreateOrUpdate/Controll/CreateOrUpdateClientepfControll'
import { Router, Request, Response } from "express"

export default (clientepfRouter: Router): void => {

  clientepfRouter.post("/create-clientepf", async (req: Request, res: Response) => {
    const entityCase = await createClientepfControll(req.body)
    const response = entityCase
    return res.status(200).json(response)
  })

}
