import { Module } from '@nestjs/common'
import { MoviesController } from './movies.controller'
import { MoviesService } from './movies.service'
import { MoviesRepositoryModule } from 'src/infra/repositories/movies/movies-repository.module'

@Module({
  imports: [MoviesRepositoryModule],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesService]
})
export class MoviesModule {}
