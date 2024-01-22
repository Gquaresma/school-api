import { Service } from './Service'
import ProfessorsRepository from 'App/Repositories/ProfessorRepository'

class ProfessorService extends Service {
  public async all() {
    const professors = await ProfessorsRepository.all()

    return professors
  }

  public async find(id: number) {
    const professor = await ProfessorsRepository.find(id)

    return professor
  }

  public async destroy(id: number) {
    const professor = await ProfessorsRepository.destroy(id)

    return professor
  }
}

export default new ProfessorService(ProfessorsRepository)
