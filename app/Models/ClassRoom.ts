import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  ManyToMany,
  belongsTo,
  column,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Professor from './Professor'
import Student from './Student'

export default class ClassRoom extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public classNumber: number

  @column()
  public isAvailable: boolean

  @column()
  public currentCapacity: number

  @column()
  public maxCapacity: number

  @column()
  public professorId: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Professor)
  public professor: BelongsTo<typeof Professor>

  @manyToMany(() => Student, {
    localKey: 'id',
    pivotForeignKey: 'class_room_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'student_id',
    pivotTable: 'class_rooms_students',
    pivotTimestamps: true,
  })
  public students: ManyToMany<typeof Student>
}
