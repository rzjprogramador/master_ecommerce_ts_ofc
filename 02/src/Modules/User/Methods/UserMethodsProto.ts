import { PropsUserMethodsProto } from '@src/Modules/User/Core/Contracts/UserContracts'


export const userMethodsProto: PropsUserMethodsProto = {
	async getNomeCompleto() {
		return await `${this.primeiroNome} ${this.complementoNome}`
	},

	async getPropsUserDefault(cpf = this.cpf) {
		// const cpf = this.cpf
		return await {
			cpf,
		}
	},

	async getPropsClientePessoaJuridica(cnpj = this.cnpj, razaoSocial = this.razaoSocial) {
		return await {
			cnpj,
			razaoSocial
		}
	},
}
