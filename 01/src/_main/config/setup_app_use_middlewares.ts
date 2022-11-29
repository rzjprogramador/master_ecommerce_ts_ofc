import { Express } from "express"
import { bodyParser, cors, contentType } from "@src/_main/middlewares"
import { errorResponseMiddleExpress } from "@src/_main/middlewares/errors_response_express"

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
  app.use(errorResponseMiddleExpress)
}
