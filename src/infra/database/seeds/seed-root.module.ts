import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { MoviesEntity } from '../../../domain/infra/entities/movies.entity'
import { SeedModule } from './seed.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/db.sqlite',
      entities: [MoviesEntity],
      synchronize: true
    }),
    SeedModule
  ]
})
export class SeedRootModule {}
