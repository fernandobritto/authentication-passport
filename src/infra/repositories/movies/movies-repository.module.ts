import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MOVIES_REPOSITORY } from 'src/domain/infra/repositories/movies/movies.interface'
import { MoviesRepository } from './movies.repository'
import { MoviesEntity } from 'src/domain/infra/entities/movies.entity'

@Module({
  imports: [TypeOrmModule.forFeature([MoviesEntity])],
  providers: [
    {
      provide: MOVIES_REPOSITORY,
      useClass: MoviesRepository
    }
  ],
  exports: [MOVIES_REPOSITORY]
})
export class MoviesRepositoryModule {}
