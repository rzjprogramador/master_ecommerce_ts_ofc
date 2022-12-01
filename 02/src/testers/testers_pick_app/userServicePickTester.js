
const modelEntityBase = {
  model1: 'bar',
  model2: 'bar2',
}

const registersParticipant = {
  foo1: 'bar',
  foo2: 'bar2',
}

// -- PROPS - QUE PODEM SER ENVIADAS VIA METODO PROTO
const propsUserDefault = {
  propsContext: {
    cpf: 'CPF ... É USER NORMAL PF',
  }
}

const propsClientepj = {
  propsContext: {
    cnpj: 'CNPJ ... É USER PESSOA JURIDICA',
  }
}
// ---

// VARIANTE -- QUAL É O USER >> USER ENVIADO VIA REQUEST SERA AQUI AVALIADO
const user = propsUserDefault
// const user = propsClientepj

// DEFINIR PROPS USER

const definePropsUser = (user) => {
  if (user.propsContext.cpf) {
    return propsUserDefault
  }
  if (user.propsContext.cnpj) {
    return propsClientepj
  }
  return propsUserDefault
}

const propsContext = definePropsUser(user)
// ---

const complement = {
  id: 'generateID()',
  registers: registersParticipant
}

const completedEntity = {
  ...modelEntityBase,
  ...complement,
  ...propsContext
}

console.log(completedEntity)