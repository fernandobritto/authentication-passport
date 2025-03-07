import { join } from 'path'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './database/db.sqlite',
  // entities: [__dirname + '/**/*.entity{.ts,.js}'],
  entities: [join(__dirname, '../../domain/**/entities/*.entity{.ts,.js}')],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: true,
  extra: {
    busyTimeout: 10000
  }
})
