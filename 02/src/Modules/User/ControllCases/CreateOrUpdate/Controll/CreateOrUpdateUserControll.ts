import { ok, fail } from '@src/App/Helpers/responses/http_request_response'
import { createOrUpdateUserServiceSave } from '@src/Modules/User/Core/ServiceSave/CreateOrUpdateUserServiceSave'
import { CreateUserFN } from '@src/Modules/User/_Core/Contracts/UserContracts'

export const createOrUpdateUserControll: CreateUserFN = async (user) => {
    if (!user) {
        return await fail(new Error('todo: ops'))
    }
    return ok(await createOrUpdateUserServiceSave(user))
}
