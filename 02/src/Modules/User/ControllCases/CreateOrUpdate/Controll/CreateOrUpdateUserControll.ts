import { ok, fail } from '@src/App/Helpers/responses/http_request_response'
import { CreateOrUpdateUserControll } from '@src/Modules/User/Base/UserContracts'
import { createOrUpdateUserServiceSave } from '@src/Modules/User/ControllCases/CreateOrUpdate/ServiceSave/CreateOrUpdateUserServiceSave'

export const createOrUpdateUserControll: CreateOrUpdateUserControll = async (user) => {
    if (!user) {
        return await fail(new Error('todo: ops'))
    }
    return ok(await createOrUpdateUserServiceSave(user))
}