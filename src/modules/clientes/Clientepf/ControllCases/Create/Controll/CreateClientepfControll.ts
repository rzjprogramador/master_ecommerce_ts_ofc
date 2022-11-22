import { createClientepfService } from '@src/modules/clientes/Clientepf/ControllCases/Create/Service/CreateClientepfService'
import { CreateClientepfControll } from '@src/modules/clientes/Contracts/Clientepf.contract'
import { ok, fail } from '@src/app/helpers/responses/http_request_response'

export const createClientepfControll: CreateClientepfControll = async (cliente) => {
    if (!cliente) {
        return await fail(new Error('todo: ops'))
    }
    return ok(await createClientepfService(cliente))
}