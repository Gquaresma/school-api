import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { UserType } from 'App/Enums/UserType'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100).notNullable()
      table.string('email').notNullable()
      table.enum('type', Object.values(UserType)).notNullable()
      table.string('registry', 100).notNullable().unique()
      table.dateTime('birthday').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
