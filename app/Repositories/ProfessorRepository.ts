import { Repository } from './Repository'
import Professor from 'App/Models/Professor'
import User from 'App/Models/User'
import ClassRoom from 'App/Models/ClassRoom'

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

  public async professorClasses(id: number) {
    const professorCourses = await ClassRoom.query().where('professor_id', id)

    return professorCourses
  }
}

export default new ProfessorRepository(Professor)
