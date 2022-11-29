import { ServerError } from "@src/App/Helpers/custom_errors"
import { HttpResponse } from "@src/App/Helpers/responses/http.contract"

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
})

export const fail = (error: Error): HttpResponse => ({
  statusCode: 400,
  data: error,
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  data: error,
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  data: new ServerError(),
})
