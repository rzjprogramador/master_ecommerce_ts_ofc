import { createClienteService } from '@src/modules/participant/clientes/controll_cases_api/create/service/create_cliente_service'
import { CreateClienteControll } from '@src/modules/participant/clientes/cases_entity/create/cliente.contracts'
import { ok, fail } from '@src/app/helpers/responses/http_request_response'

export const createClienteControll: CreateClienteControll = async (cliente) => {
    if (!cliente) {
        return await fail(new Error('todo: ops'))
    }
    return ok(await createClienteService(cliente))
}