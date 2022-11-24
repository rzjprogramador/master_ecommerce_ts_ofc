import { ClientepfModel } from '@src/Modules/Clientes/Clientepf/Contracts/ClientepfContracts'
import { recordsDNAParticipant } from '@src/app/use_objects/records_dna_participant'
import { generateID } from '@src/app/helpers/generators/records_generators'
import { clientepfVariantesOne } from '@src/Modules/Clientes/Clientepf/Variantes/ClientepfVariantes.variantes.spec'


export const clientepfSeedOne: ClientepfModel = {
    ...clientepfVariantesOne.args,
    records: recordsDNAParticipant,
    id: generateID(),
    nomeCompleto: `${clientepfVariantesOne.args.nome} ${clientepfVariantesOne.args.sobrenome}`,
    pessoa: clientepfVariantesOne.pessoa,
    typeCliente: clientepfVariantesOne.pessoa
}
