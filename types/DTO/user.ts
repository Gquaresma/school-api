import { UserType } from 'app/Enums/UserType'
import { DateTime } from 'luxon'

export type UserDTO = {
  name: string
  email: string
  type: UserType
  birthday: DateTime
}

export type UserUpdateDTO = {
  name?: string
  email?: string
  type?: UserType
  birthday?: DateTime
}
