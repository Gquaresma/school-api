import { UserType } from 'app/Enums/UserType'
import { DateTime } from 'luxon'

export type UserDTO = {
  name: string
  email: string
  type: UserType
  registry: string
  birthday: DateTime
}

export type UserUpdateDTO = {
  name?: string
  email?: string
  registry?: string
  type?: UserType
}
