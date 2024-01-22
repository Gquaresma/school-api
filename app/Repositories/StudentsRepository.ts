import { Repository } from './Repository'
import Student from 'App/Models/Student'
import User from 'App/Models/User'

class StudentRepository extends Repository {
  public async all() {
    const students = await User.query().where('type', 'student').preload('student')

    return students
  }

  public async find(id: number) {
    const student = await Student.query()
      .where('id', id)
      .preload('user', (query) => {
        query.select(['id', 'name', 'email', 'registry', 'type'])
      })
      .firstOrFail()

    return student
  }

  public async showStudentClasses(id: number) {
    const student = await Student.query()
      .where('id', id)
      .preload('classRooms', (query) => {
        query.where('is_available', true).preload('professor', (query) => {
          query.select(['user_id']).preload('user', (query) => {
            query.select(['name'])
          })
        })
      })
      .preload('user', (query) => {
        query.select(['name'])
      })

    return student
  }

  public async destroy(id: number) {
    const student = await Student.findOrFail(id)

    const user = await User.findOrFail(student.userId)

    await student.delete()
    await user?.delete()
  }
}

export default new StudentRepository(Student)
