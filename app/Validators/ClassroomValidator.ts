import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const createClassroomSchema = schema.create({
  classNumber: schema.number([rules.unsigned()]),
  professorId: schema.number([rules.unsigned()]),
  maxCapacity: schema.number([rules.unsigned()]),
  isAvailable: schema.boolean.optional(),
})

export const updateClassroomSchema = schema.create({
  classNumber: schema.number.optional([rules.unsigned()]),
  professorId: schema.number([rules.unsigned()]),
  maxCapacity: schema.number.optional([rules.unsigned()]),
  isAvailable: schema.boolean.optional(),
})

export const aloccateAndDeallocateStudentSchema = schema.create({
  studentId: schema.number([rules.unsigned()]),
  professorIdBody: schema.number([rules.unsigned()]),
})
