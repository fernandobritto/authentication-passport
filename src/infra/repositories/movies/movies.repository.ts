import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { MoviesEntity } from 'src/domain/infra/entities/movies.entity'
import { IMoviesRepository } from 'src/domain/infra/repositories/movies/movies.interface'

@Injectable()
export class MoviesRepository implements IMoviesRepository {
  constructor(
    @InjectRepository(MoviesEntity)
    private readonly repository: Repository<MoviesEntity>
  ) {}

  async getMovies(): Promise<MoviesEntity[]> {
    return this.repository.find()
  }
}
