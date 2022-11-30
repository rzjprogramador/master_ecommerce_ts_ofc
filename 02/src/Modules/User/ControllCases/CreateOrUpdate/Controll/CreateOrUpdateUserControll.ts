import { ok, fail } from '@src/App/Helpers/responses/http_request_response'
import { createOrUpdateUserServiceSave } from '@src/Modules/User/ControllCases/CreateOrUpdate/ServiceSave/CreateOrUpdateUserServiceSave'
import { CreateUserTypeFN} from '@src/Modules/User/Base/UserContracts'

export const createOrUpdateUserControll: CreateUserTypeFN = async (user) => {
    if (!user) {
        return await fail(new Error('todo: ops'))
    }
    return ok(await createOrUpdateUserServiceSave(user))
}