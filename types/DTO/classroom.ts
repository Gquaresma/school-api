export type ClassroomDTO = {
  classNumber: number
  maxCapacity: number
  professorId: string
  isAvailable?: boolean
}

export type ClassroomUpdateDTO = {
  classNumber?: number
  isAvailable?: boolean
  maxCapacity?: number
  professorId?: string
}
