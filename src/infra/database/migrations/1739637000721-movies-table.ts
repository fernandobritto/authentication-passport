import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class MoviesTable1739637000721 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true
          },
          {
            name: 'year',
            type: 'integer',
            isNullable: false
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'studios',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'producers',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'winner',
            type: 'boolean',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'datetime',
            isNullable: false,
            default: "datetime('now')"
          },
          {
            name: 'updated_at',
            type: 'datetime',
            isNullable: false,
            default: "datetime('now')"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies')
  }
}
