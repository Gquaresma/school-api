import { Repository } from './Repository'
import User from 'App/Models/User'

class UserRepository extends Repository {}

export default new UserRepository(User)
