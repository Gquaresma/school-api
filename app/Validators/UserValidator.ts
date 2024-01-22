import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { UserType } from 'App/Enums/UserType'

export const postSchema = schema.create({
  name: schema.string({}, [rules.minLength(3), rules.maxLength(100)]),
  email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
  type: schema.enum(Object.values(UserType)),
  birthday: schema.date({
    format: 'dd-MM-yyyy',
  }),
})
