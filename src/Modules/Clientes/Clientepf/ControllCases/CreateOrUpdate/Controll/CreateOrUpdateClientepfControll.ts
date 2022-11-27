import { createOrUpdateClientepfSave } from '@src/Modules/Clientes/Clientepf/ControllCases/CreateOrUpdate/Save/CreateOrUpdateClientepfSave'
import { CreateOrUpdateClientepfControll } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { ok, fail } from '@src/App/Helpers/responses/http_request_response'

export const createOrUpdateClientepfControll: CreateOrUpdateClientepfControll = async (cliente) => {
    if (!cliente) {
        return await fail(new Error('todo: ops'))
    }
    return ok(await createOrUpdateClientepfSave(cliente))
}