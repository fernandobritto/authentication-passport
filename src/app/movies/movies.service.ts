import { Inject, Injectable } from '@nestjs/common'
import {
  IMoviesRepository,
  MOVIES_REPOSITORY
} from 'src/domain/infra/repositories/movies/movies.interface'

@Injectable()
export class MoviesService {
  constructor(
    @Inject(MOVIES_REPOSITORY)
    private readonly moviesRepository: IMoviesRepository
  ) {}

  async getMovies() {
    const winners = await this.getWinnerMovies()

    const producerWinsMap: Record<string, number[]> = {}

    winners.forEach((movie) => {
      const producerNames = this.parseProducers(movie.producers)
      const year = movie.year

      producerNames.forEach((producer) => {
        if (!producerWinsMap[producer]) {
          producerWinsMap[producer] = []
        }
        producerWinsMap[producer].push(year)
      })
    })

    const intervals: {
      producer: string
      interval: number
      previousWin: number
      followingWin: number
    }[] = []

    Object.entries(producerWinsMap).forEach(([producer, years]) => {
      const sortedYears = years.sort((a, b) => a - b)

      for (let i = 1; i < sortedYears.length; i++) {
        const previousWin = sortedYears[i - 1]
        const followingWin = sortedYears[i]
        const interval = followingWin - previousWin

        intervals.push({
          producer,
          interval,
          previousWin,
          followingWin
        })
      }
    })

    if (intervals.length === 0) {
      return {
        min: [],
        max: []
      }
    }

    const minInterval = Math.min(...intervals.map((item) => item.interval))
    const maxInterval = Math.max(...intervals.map((item) => item.interval))

    const minResult = intervals.filter((item) => item.interval === minInterval)
    const maxResult = intervals.filter((item) => item.interval === maxInterval)

    return {
      min: minResult,
      max: maxResult
    }
  }

  private async getWinnerMovies() {
    const allMovies = await this.moviesRepository.getMovies()
    return allMovies.filter((movie) => movie.winner === true)
  }

  private parseProducers(producersField: string): string[] {
    return producersField
      .replace(/ and /gi, ',')
      .split(',')
      .map((producer) => producer.trim())
      .filter((producer) => !!producer)
  }
}
