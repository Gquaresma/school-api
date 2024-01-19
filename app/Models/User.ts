import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Student from './Student'
import Professor from './Professor'
import { UserType } from 'App/Enums/UserType'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public type: UserType

  @column()
  public registry: string

  @column.dateTime()
  public birthday: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Student)
  public student: HasOne<typeof Student>

  @hasOne(() => Professor)
  public professor: HasOne<typeof Professor>
}
