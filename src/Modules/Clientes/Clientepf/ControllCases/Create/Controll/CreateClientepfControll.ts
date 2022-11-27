import { createClientepfSave } from '@src/Modules/Clientes/Clientepf/ControllCases/Create/Save/CreateClientepfSave'
import { CreateClientepfControll } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { ok, fail } from '@src/app/Helpers/responses/http_request_response'

export const createClientepfControll: CreateClientepfControll = async (cliente) => {
    if (!cliente) {
        return await fail(new Error('todo: ops'))
    }
    return ok(await createClientepfSave(cliente))
}