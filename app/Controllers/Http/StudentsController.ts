import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Controller from 'App/Controllers/Http/Controller'
import StudentService from 'App/Services/StudentService'

class StudentsController extends Controller {
  public async all({ response }: HttpContextContract) {
    try {
      const data = await StudentService.all()

      if (data.length === 0) return response.notFound({ message: 'Estudantes não encotrados' })

      return response.ok(data)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async find({ response, params }: HttpContextContract) {
    try {
      const data = await StudentService.find(params.id)

      if (!data) return response.notFound({ message: 'Estudante não encontrado' })

      return response.ok(data)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async showStudentClasses({ response, params }: HttpContextContract) {
    try {
      const data = await StudentService.showStudentClasses(params.id)

      if (!data) return response.notFound({ message: 'Recurso não encontrado' })

      return response.ok(data)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      await StudentService.destroy(params.id)

      return response.ok({ message: 'Estudante deletado com sucesso' })
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }
}

export default new StudentsController(StudentService)
