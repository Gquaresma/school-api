import Controller from 'App/Controllers/Http/Controller'
import UserService from 'App/Services/UserService'

class UsersController extends Controller {}

export default new UsersController(UserService)
