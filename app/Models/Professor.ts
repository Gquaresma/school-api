import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import ClassRoom from './ClassRoom'

export default class Professor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => ClassRoom)
  public classRoom: HasMany<typeof ClassRoom>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
