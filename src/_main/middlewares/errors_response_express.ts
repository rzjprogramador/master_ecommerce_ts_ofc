import { HttpResponse } from "@src/app/helpers/responses/http.contract"
import { BaseExpressApiError } from "@src/app/helpers/custom_errors"
import { ServerError } from "@src/app/helpers/custom_errors/server_error"
// import { serverError } from '@src/helpers/responses/http_request_response'

import { NextFunction, Request, Response } from "express"

export const errorResponseMiddleExpress = (error: Error & Partial<BaseExpressApiError>, req: Request, res: Response, next: NextFunction) => {
  // console.error(error)
  const statusCode = error.statusCode ?? 500
  const message = error.statusCode ? error.message : "Erro Inesperado"
  const response = {
    statusCode,
    message,
    stack: error?.stack,
  }

  return res.status(statusCode).json(response)
}
