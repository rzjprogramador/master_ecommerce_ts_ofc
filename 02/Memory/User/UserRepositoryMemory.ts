import { UserRepository } from '../../src/Modules/User/_Core/Base/UserContracts'

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

  async updateById(id, newData) {
    const found = await this.items.find(data => data.id === id)
    const reassign = await Object.assign(found as any, newData)
    return reassign
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
