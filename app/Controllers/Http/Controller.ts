import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import IController from 'types/interface/controller'
import IService from 'types/interface/service'

export default abstract class Controller implements IController {
  protected service: IService

  constructor(service: IService) {
    this.service = service
  }

  public async index({ response }: HttpContextContract): Promise<any> {
    const data = await this.service.all()
    return response.ok(data)
  }

  public async create({ request, response }: HttpContextContract): Promise<any> {
    const data = await this.service.create(request.body())
    return response.created(data)
  }

  public async show({ params, response }: HttpContextContract): Promise<any> {
    const data = await this.service.find(params.id)
    return response.ok(data)
  }

  public async update({ params, request, response }: HttpContextContract): Promise<any> {
    const data = await this.service.update(params.id, request.body())
    return response.ok(data)
  }

  public async destroy({ params, response }: HttpContextContract): Promise<any> {
    await this.service.delete(params.id)
    return response.noContent()
  }
}
