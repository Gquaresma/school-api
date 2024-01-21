import { Service } from 'App/Services/Service'
import IRepository from 'types/interface/repository'
import UserRepository from 'App/Repositories/UserRepository'
import { UserDTO, UserUpdateDTO } from 'types/DTO/user'

class UserService extends Service {
  constructor(repo: IRepository) {
    super(repo)
  }

  public async create(data: UserDTO) {
    const user = await super.create(data)

    const userType = data.type === 'student' ? 'student' : 'professor'
    await user.related(userType).create({ userId: user.id.toString() })

    return user
  }

  public async update(id: number, data: UserUpdateDTO) {
    const userFound = await super.find(id)

    if (!userFound) throw new Error('Usuário não encontrado')

    return super.update(id, { ...userFound, ...data })
  }
}

export default new UserService(UserRepository)
