// transacao mixflex backup


// // import { prisma } from '@src/Providers/Database/PrismaClient'

// // import { cliente_1 } from '@src/modules/ProdEncomenda/fakes/by_seed/CompraProdEncomendaPDF/clientes'
// // import { produto15 } from '@src/modules/ProdEncomenda/fakes/by_seed/CompraProdEncomendaPDF/produto'
// // import { venda_1 } from '@src/modules/ProdEncomenda/fakes/by_seed/CompraProdEncomendaPDF/venda'
// // import { enderecoItemPedido_1, enderecoItemPedido_2 } from '@src/modules/ProdEncomenda/fakes/by_seed/CompraProdEncomendaPDF/enderecoItemPedido'

// export async function TransCompraProdEncomendaSEED() {

//      /* UNIDADE */
// //   const clienteCompras_1 = await prisma.pedido.upsert({
// //     where: { codigo: '1' },
// //     update: {},
// //     create: {
// //         codigo: '1',

// //         itemsDoPedido: {
// //             create: {
// //                 desconto: 0,
// //                 quantidade: 1, // CALCULAR O VALOR CONFORME A QUANTIDADE NO: EntregaPedidos
// //                 preco: 15, // CALCULAR O VALOR CONFORME A QUANTIDADE NO: EntregaPedidos

// //                 EntregaPedidos: {
// //                     create: [
// //                         enderecoItemPedido_1, enderecoItemPedido_2
// //                     ]
// //                 }
// //             },
// //         },

// //         Cliente: {
// //             connectOrCreate: {
// //                 where: {
// //                     email: 'clienteCompras1',
// //                 },
// //                 create: cliente_1
// //             }
// //         },

// //         Produto: {
// //             create: produto15
// //         },

// //         Venda: {
// //             create: venda_1
// //         },
// //     },

// // }) // METODO PRINCIPAL

// }


// // /*
// // obs: importante o primeiro caso de uso tem que ter a condicao unica do caso e o objeto update
// // ex:
// //     where: { codigo: '1' },
// //     update: {},


// // */