import { MoviesEntity } from 'src/domain/infra/entities/movies.entity'

export interface IMoviesRepository {
  getMovies(): Promise<MoviesEntity[]>
}

export const MOVIES_REPOSITORY = Symbol('MOVIES_REPOSITORY')
