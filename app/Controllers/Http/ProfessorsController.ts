import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Controller from 'App/Controllers/Http/Controller'
import ProfessorService from 'App/Services/ProfessorService'

class ProfessorsController extends Controller {
  public async all({ response }: HttpContextContract) {
    try {
      const data = await ProfessorService.all()

      if (data.length === 0) return response.notFound({ message: 'Professores não encotrados' })

      return response.ok(data)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async find({ response, params }: HttpContextContract) {
    try {
      const data = await ProfessorService.find(params.id)

      if (!data) return response.notFound({ message: 'Professor não encontrado' })

      return response.ok(data)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      await ProfessorService.destroy(params.id)

      return response.ok({ message: 'Professor deletado com sucesso' })
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }
}

export default new ProfessorsController(ProfessorService)
