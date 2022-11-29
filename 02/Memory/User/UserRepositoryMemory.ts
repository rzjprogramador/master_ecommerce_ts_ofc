import { UserRepository } from '../../src/Modules/User/Base/UserContracts'

export const userRepositoryMemory: UserRepository = {
  items: [],

  async acessItems() {
    return await this.items
  },

  async create(user) {
    await this.items.push(user)
    return await user
  },

  async list() {
    return await this.items
  },

  async update(id, newData) {
    // const id = user?.id
    const clienteFound = await this.items.find(user => user.id === id)
    return await { ...clienteFound, ...newData }
  },

  async remove(id) {
    let operation = false
    this.items.forEach(
      (value, index, object) => {
        if (value.id === id) {
          object.splice(index, 1)
          operation = true
        }
      }
    )
    return operation
  },

}