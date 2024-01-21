import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Controller from 'App/Controllers/Http/Controller'
import UserService from 'App/Services/UserService'
import IService from 'types/interface/service'

class UsersController extends Controller {
  constructor(service: IService) {
    super(service)
  }
}

export default new UsersController(UserService)
