import { ClassroomDTO } from 'types/DTO/classroom'
import { Repository } from './Repository'
import ClassRoom from 'App/Models/ClassRoom'
import Student from 'App/Models/Student'
import ProfessorService from 'App/Services/ProfessorService'

class ClassRoomsRepository extends Repository {
  public async all() {
    const classrooms = await ClassRoom.query().preload('professor', (query) =>
      query.preload('user')
    )

    return classrooms
  }
  public async create(data: ClassroomDTO) {
    await ProfessorService.find(Number(data.professorId))

    const classRoom = await ClassRoom.create(data)

    return classRoom
  }

  public async find(id: number) {
    const classroom = await ClassRoom.query()
      .where('id', id)
      .preload('professor', (query) => query.preload('user'))
      .preload('students', (query) => query.preload('user'))
      .firstOrFail()

    return classroom
  }

  public async getClassroomAndStudent(classroomId: number, professorId: number, studentId: number) {
    const classroom = await ClassRoom.query()
      .where({
        id: classroomId,
        professor_id: professorId,
      })
      .preload('students')
      .firstOrFail()

    const student = await Student.findByOrFail('id', studentId)

    return { classroom, student }
  }

  public async addStudentToClassroom(classroom: ClassRoom, student: Student) {
    await classroom.related('students').attach([student.id])
    classroom.currentCapacity += 1

    if (classroom.currentCapacity === classroom.maxCapacity) classroom.isAvailable = false

    await classroom.save()
  }

  public async removeStudentFromClassroom(classroom: ClassRoom, student: Student) {
    await classroom.related('students').detach([student.id])
    classroom.isAvailable = true
    classroom.currentCapacity -= 1
    await classroom.save()
  }
}

export default new ClassRoomsRepository(ClassRoom)
