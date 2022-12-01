const modelEntityBase = {
  model1: 'bar',
  model2: 'bar2',
}

const registersParticipant = {
  foo1: 'bar',
  foo2: 'bar2',
}

const complement = {
  id: 'generateID()',
  registers: registersParticipant
}

// TESTER SE completedEntity ESTA JUNTANDO E FORMANDO CORRETAMENTE O OBJ FINAL

const completedEntity = {
  ...modelEntityBase,
  ...complement
}

console.log(completedEntity)
