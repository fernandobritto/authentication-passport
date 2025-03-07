import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MoviesEntity } from 'src/domain/infra/entities/movies.entity'
import { MoviesSeed } from './movies.seed'

@Module({
  imports: [TypeOrmModule.forFeature([MoviesEntity])],
  providers: [MoviesSeed],
  exports: [MoviesSeed]
})
export class SeedModule {}
