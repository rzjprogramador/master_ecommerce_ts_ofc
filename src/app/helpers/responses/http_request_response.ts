import { ServerError } from "@src/app/helpers/custom_errors"
import { HttpResponse } from "@src/app/helpers/responses/http.contract"

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
})

export const fail = (data: any): HttpResponse => ({
  statusCode: 400,
  data,
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  data: error,
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  data: new ServerError(),
})
