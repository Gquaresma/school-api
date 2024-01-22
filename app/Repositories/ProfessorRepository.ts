import { Repository } from './Repository'
import Professor from 'App/Models/Professor'
import User from 'App/Models/User'

class ProfessorRepository extends Repository {
  public async all() {
    const professors = await User.query().where('type', 'professor').preload('professor')

    return professors
  }

  public async find(id: number) {
    const professor = await Professor.query()
      .where('id', id)
      .preload('user', (query) => {
        query.select(['id', 'name', 'email', 'registry', 'type'])
      })
      .firstOrFail()

    return professor
  }

  public async destroy(id: number) {
    const professor = await Professor.findOrFail(id)

    const user = await User.findOrFail(professor.userId)

    await professor.delete()
    await user?.delete()
  }
}

export default new ProfessorRepository(Professor)
