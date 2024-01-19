import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'class_rooms'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('class_number').notNullable()
      table.boolean('is_available').notNullable().defaultTo(true)
      table.integer('current_capacity').unsigned().notNullable().defaultTo(0)
      table.integer('max_capacity').unsigned().notNullable()
      table
        .integer('professor_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('professors')
        .onDelete('CASCADE')

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
