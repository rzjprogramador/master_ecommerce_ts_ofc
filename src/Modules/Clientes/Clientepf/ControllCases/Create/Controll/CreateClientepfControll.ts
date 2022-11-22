import { createClientepfService } from '@src/Modules/Clientes/Clientepf/ControllCases/Create/Service/CreateClientepfService'
import { CreateClientepfControll } from '@src/Modules/Clientes/Contracts/Clientepf.contract'
import { ok, fail } from '@src/app/helpers/responses/http_request_response'

export const createClientepfControll: CreateClientepfControll = async (cliente) => {
    if (!cliente) {
        return await fail(new Error('todo: ops'))
    }
    return ok(await createClientepfService(cliente))
}