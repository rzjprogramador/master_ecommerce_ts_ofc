// 1 >> ENTREGAS FUNCIONAL

const clientes = [
    { id: '1', token: '1', nome: 'one' },
    { id: '2', token: '2', nome: 'two' },
    { id: '3', token: '3', nome: 'tree' },
]

const findCliente = (id) => {
    return clientes.find(cliente => cliente.id === id)
}

// console.log(findCliente('2'))

const coberturasEntregas = [
    { cepInicial: '10', cepFinal: '19' },
    { cepInicial: '20', cepFinal: '29' },
    { cepInicial: '30', cepFinal: '39' },
]

const utilsSimbols = {
    currencyBR: 'R$',
    percentage: '%'
}

const utilsStrings = {
    separatorTxtMsg: '***',
}

const utilsExpression = {
    fail: 'Ops!',
    sucess: 'Ok!'
}

const hasCepCoberturaEntrega = (cep) => {
    const formula = coberturasEntregas.find(c => c.cepInicial <= cep && c.cepFinal >= cep)
    return !!formula
}
// console.log(hasCep('99'))

const formulaDiscountPercentage = (priceBase, percentageDiscount) => {
    return (priceBase - (priceBase * percentageDiscount) / 100)
}

const useMessage = (priceBase, percentageDiscount, formulaPrice) => {
    return `preco base: ${utilsSimbols.currencyBR} ${priceBase},00 ${utilsStrings.separatorTxtMsg} desconto: ${percentageDiscount}${utilsSimbols.percentage} ${utilsStrings.separatorTxtMsg} valor unitario faturado: ${utilsSimbols.currencyBR} ${formulaPrice},00`
}

const responseInvalidCep = (cep) => {
    return `${utilsExpression.fail} sem cobertura para o cep ${cep}.`
}

// PLANOS METHODS ------------------------

const PlanoEntregaDia = (name) => {
    const cep = '19'
    const priceBase = 10
    const percentageDiscount = 10
    const formulaPrice = formulaDiscountPercentage(priceBase, percentageDiscount)

    const message = useMessage(priceBase, percentageDiscount, formulaPrice)

    const user = findCliente('1')

    const res = {
        precoUnitario: formulaPrice,
        priceBase,
        percentageDiscount,
        name,
        message,
        user
    }

    if (!hasCepCoberturaEntrega(cep)) { return responseInvalidCep(cep) }
    return res
}

//
const PlanoEntregaNoDiscount = () => {
    const cep = '31'
    const priceBase = 15
    const percentageDiscount = 0
    const formulaPrice = formulaDiscountPercentage(priceBase, percentageDiscount)

    const message = useMessage(priceBase, percentageDiscount, formulaPrice)

    const user = findCliente('2')

    const res = {
        precoUnitario: formulaPrice,
        priceBase,
        percentageDiscount,
        name: 'not',
        message,
        user
    }

    if (!hasCepCoberturaEntrega(cep)) { return responseInvalidCep(cep) }
    return res
}

// 
const PlanoEntregaFeriado = () => {
    const cep = '9'
    const priceBase = 20
    const percentageDiscount = 0
    const formulaPrice = formulaDiscountPercentage(priceBase, percentageDiscount)

    const message = useMessage(priceBase, percentageDiscount, formulaPrice)

    const user = findCliente('3')

    const res = {
        precoUnitario: formulaPrice,
        priceBase,
        percentageDiscount,
        name: 'feriado',
        message,
        user
    }

    if (!hasCepCoberturaEntrega(cep)) { return responseInvalidCep(cep) }
    return res
}

// ----------------------------------

const makePlanos = {
    no_dia: PlanoEntregaDia,
    proximo_dia_util: PlanoEntregaNoDiscount,
    feriado: PlanoEntregaFeriado
}

// O 1º ARG type É PARA SELECIONAR A CHAVE DO OBJETO - O 2º ...ARGS É OPCIONAIS ARGS QUE PODERAM SER USADOS NOS METODOS INDICADOS NO OBJETO NO CASO METODOS PLANOS. 
const showMakePlanos = (type, ...args) => {
    return makePlanos[type](...args)
}

// USO CLI
console.log(showMakePlanos('no_dia', 'name dia param'))
console.log(showMakePlanos('proximo_dia_util'))
console.log(showMakePlanos('feriado'))
