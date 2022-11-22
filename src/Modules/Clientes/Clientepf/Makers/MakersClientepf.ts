import { CreateClientepf } from '@src/Modules/Clientes/Clientepf/Entity/Create/CreateClientepf.entity'
import { ClientepfProps } from '@src/Modules/Clientes/Clientepf/Entity/_Props/ClientepfProps.entity'


export const makerClientepfProps = {
    on: new ClientepfProps,
}

export const makerCreateClientepf = {
    on: new CreateClientepf,
}
