interface Entity {
    nome: string
    idade: number
    method1?(): Method1
}

interface EntityMaker extends ObjProto1 {
    ({ nome, idade }: Entity): Entity
}

type Method1 = () => string

type ObjProto1 = {
    nome?: string
    method1?: Method1
}

const objProto1: ObjProto1 = {
    method1() {
        return `Sou metodo1 do nome >>  ${this?.nome}`
    }
}

const entityMaker: EntityMaker = ({ nome, idade }) => {
    const entity = Object.create(objProto1)
    entity.nome = nome
    entity.idade = idade
    return entity
}

const instance1 = entityMaker({ nome: 'Rei', idade: 45 })
const instance2 = entityMaker({ nome: 'Renata', idade: 40 })

console.log(instance1)

// VER O RETORNO DO METODO DE PROTO
console.log(instance1.method1?.())

// CONFERIR SE O OBJETO ÉPROTOTYPE() DA INSTANCIA COM METODO isPrototypeOf()
// sintaxe: OBJETO .isPrototypeOf ( INSTANCE1 )

console.log(objProto1.isPrototypeOf(instance1) && objProto1.isPrototypeOf(instance2))