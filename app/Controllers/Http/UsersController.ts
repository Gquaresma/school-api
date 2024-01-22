import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Controller from 'App/Controllers/Http/Controller'
import UserService from 'App/Services/UserService'
import { postSchema } from 'App/Validators/UserValidator'

class UsersController extends Controller {
  public async create({ request, response }: HttpContextContract): Promise<any> {
    try {
      const data = await request.validate({ schema: postSchema })
      const user = await UserService.create(data)
      return response.created(user)
    } catch (error) {
      return response.badRequest(error.messages)
    }
  }
}

export default new UsersController(UserService)
