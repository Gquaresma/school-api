import { Service } from './Service'
import StudentsRepository from 'App/Repositories/StudentsRepository'

class StudentService extends Service {
  public async all() {
    const students = await StudentsRepository.all()

    return students
  }

  public async find(id: number) {
    const student = await StudentsRepository.find(id)

    return student
  }

  public async showStudentClasses(id: number) {
    const student = await StudentsRepository.showStudentClasses(id)

    const classes = student[0].classRooms.map((classRoom) => {
      return {
        classNumber: classRoom.classNumber,
        professor: classRoom.professor.user.name,
      }
    })

    return {
      studentName: student[0].user.name,
      classes,
    }
  }

  public async destroy(id: number) {
    const student = await StudentsRepository.destroy(id)

    return student
  }
}

export default new StudentService(StudentsRepository)
