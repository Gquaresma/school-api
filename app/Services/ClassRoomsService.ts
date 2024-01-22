import { Service } from './Service'
import IRepository from 'types/interface/repository'
import ClassRoomsRepository from 'App/Repositories/ClassRoomsRepository'
import { ClassroomDTO, ClassroomUpdateDTO } from 'types/DTO/classroom'
import ClassroomException from 'App/Exceptions/ClassroomException'
import StudentAllocationException from 'App/Exceptions/StudentAllocationException'

class ClassroomsService extends Service {
  constructor(repo: IRepository) {
    super(repo)
  }

  public async create(data: ClassroomDTO) {
    const classRoom = await ClassRoomsRepository.create(data)

    return classRoom
  }

  public async update(id: number, data: ClassroomUpdateDTO) {
    const classroomFound = await super.find(id)

    if (
      !classroomFound.isAvailable &&
      data.isAvailable &&
      classroomFound.currentCapacity === classroomFound.maxCapacity
    )
      throw new ClassroomException('Não é possível alterar a disponibilidade de uma turma cheia')

    return super.update(id, { ...classroomFound, ...data })
  }

  public async destroy(id: number) {
    return super.delete(id)
  }

  public async find(id: number) {
    const classroom = await ClassRoomsRepository.find(id)

    const students = classroom.students.map((student) => {
      return {
        name: student.user.name,
        email: student.user.email,
      }
    })

    return {
      classNumber: classroom.classNumber,
      isAvailable: classroom.isAvailable,
      students,
    }
  }

  public async allocateStudent(classroomId: number, professorId: number, studentId: number) {
    const { classroom, student } = await ClassRoomsRepository.getClassroomAndStudent(
      classroomId,
      professorId,
      studentId
    )

    if (!classroom.isAvailable)
      throw new ClassroomException('Turma não disponível para alocação de alunos')

    if (classroom.students.find((student) => student.id === studentId))
      throw new StudentAllocationException('Aluno já alocado na turma')

    await ClassRoomsRepository.addStudentToClassroom(classroom, student)

    return { message: 'Aluno alocado' }
  }

  public async deallocateStudent(classroomId: number, professorId: number, studentId: number) {
    const { classroom, student } = await ClassRoomsRepository.getClassroomAndStudent(
      classroomId,
      professorId,
      studentId
    )

    if (classroom.currentCapacity <= 0) throw new ClassroomException('Está sala está vazia')

    if (!classroom.students.find((student) => student.id === studentId))
      throw new StudentAllocationException('Aluno não faz parte da turma')

    await ClassRoomsRepository.removeStudentFromClassroom(classroom, student)

    return { message: 'Aluno desalocado' }
  }
}

export default new ClassroomsService(ClassRoomsRepository)
