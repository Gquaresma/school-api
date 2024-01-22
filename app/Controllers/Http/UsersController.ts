import Controller from 'App/Controllers/Http/Controller'
import UserService from 'App/Services/UserService'

class UsersController extends Controller {
  // constructor(service: IService) {
  //   super(service)
  // }
}

export default new UsersController(UserService)
