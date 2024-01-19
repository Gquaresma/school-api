import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  ManyToMany,
  belongsTo,
  column,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import ClassRoom from './ClassRoom'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @manyToMany(() => ClassRoom, {
    localKey: 'id',
    pivotForeignKey: 'student_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'class_room_id',
    pivotTable: 'class_rooms_students',
    pivotTimestamps: true,
  })
  public classRooms: ManyToMany<typeof ClassRoom>
}
