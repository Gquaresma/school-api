import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Controller from 'App/Controllers/Http/Controller'
import ClassRoomsService from 'App/Services/ClassRoomsService'
import { ClassroomDTO, ClassroomUpdateDTO } from 'types/DTO/classroom'
import { createClassroomSchema, updateClassroomSchema } from 'App/Validators/ClassroomValidator'

class ClassroomsController extends Controller {
  public async create({ request, response, params }: HttpContextContract) {
    try {
      const data = await request.validate({ schema: createClassroomSchema })

      if (Number(params.professorId) !== data.professorId)
        return response.unauthorized({
          message: 'Você não pode criar uma sala para outro professor',
        })

      const classroom = await ClassRoomsService.create(data as unknown as ClassroomDTO)

      return response.created(classroom)
    } catch (error) {
      return response.badRequest({ message: error })
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const data = await request.validate({ schema: updateClassroomSchema })

      if (Number(params.professorId) !== data.professorId)
        return response.unauthorized({
          message: 'Você não pode alterar uma sala de outro professor',
        })

      await ClassRoomsService.update(params.id, data as ClassroomUpdateDTO)

      return response.ok('Sala atualizada')
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async destroy({ request, params, response }: HttpContextContract) {
    try {
      const { professorId } = request.only(['professorId'])

      if (Number(params.professorId) !== professorId)
        return response.unauthorized({
          message: 'Você não pode deletar uma sala de outro professor',
        })

      await ClassRoomsService.destroy(params.id)

      return response.ok({ message: 'Sala deletada com sucesso' })
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async find({ response, params }: HttpContextContract) {
    try {
      const data = await ClassRoomsService.find(params.id)

      return response.ok(data)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async allocateStudent({ request, response, params }: HttpContextContract) {
    try {
      const { studentId, professorIdBody } = request.only(['studentId', 'professorIdBody'])
      const { classId, professorId } = params

      if (professorIdBody !== Number(professorId))
        return response.unauthorized({
          message: 'Você não pode alocar um aluno para uma sala que não é sua',
        })

      const data = await ClassRoomsService.allocateStudent(classId, professorId, studentId)

      return response.ok(data)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async deallocateStudent({ request, response, params }: HttpContextContract) {
    try {
      const { studentId, professorIdBody } = request.only(['studentId', 'professorIdBody'])
      const { classId, professorId } = params

      if (professorIdBody !== Number(professorId))
        return response.unauthorized({
          message: 'Você não pode desalocar um aluno para uma sala que não é sua',
        })

      const data = await ClassRoomsService.deallocateStudent(classId, professorId, studentId)

      return response.ok(data)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }
}

export default new ClassroomsController(ClassRoomsService)
