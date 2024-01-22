import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import IController from 'types/interface/controller'
import IService from 'types/interface/service'

export default abstract class Controller implements IController {
  protected service: IService

  constructor(service: IService) {
    this.service = service
  }

  public async index({ response }: HttpContextContract): Promise<any> {
    try {
      const data = await this.service.all()

      if (data.length === 0) return response.noContent()

      return response.ok(data)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async create({ request, response }: HttpContextContract): Promise<any> {
    try {
      const data = await this.service.create(request.body())
      return response.created(data)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async show({ params, response }: HttpContextContract): Promise<any> {
    try {
      const data = await this.service.find(params.id)

      if (!data) return response.notFound({ message: 'Recurso não encontrado' })

      return response.ok(data)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async update({ params, request, response }: HttpContextContract): Promise<any> {
    try {
      const data = await this.service.update(params.id, request.body())
      return response.ok(data)
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }

  public async destroy({ params, response }: HttpContextContract): Promise<any> {
    try {
      await this.service.delete(params.id)
      return response.noContent()
    } catch (error) {
      return response.badRequest({ message: error.message })
    }
  }
}
