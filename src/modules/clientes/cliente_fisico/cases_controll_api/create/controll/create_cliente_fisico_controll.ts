import { createClienteFisicoService } from '@src/modules/clientes/cliente_fisico/cases_controll_api/create/service/create_cliente_fisico_service'
import { CreateClienteFisicoControll } from '@src/modules/clientes/_data_edit/contracts_clientes/cliente_fisico.contracts'
import { ok, fail } from '@src/app/helpers/responses/http_request_response'

export const createClienteFisicoControll: CreateClienteFisicoControll = async (cliente) => {
    if (!cliente) {
        return await fail(new Error('todo: ops'))
    }
    return ok(await createClienteFisicoService(cliente))
}