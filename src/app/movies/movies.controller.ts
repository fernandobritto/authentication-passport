import { Controller, HttpCode, HttpStatus, Get } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'

@Controller('movies')
@ApiTags('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get movies',
    description:
      'Get the producer with the longest interval between two consecutive awards and the one who obtained two awards the fastest'
  })
  @ApiResponse({
    status: 200,
    description: 'Example response',
    content: {
      'application/json': {
        examples: {
          response: {
            value: {
              min: [
                {
                  producer: 'Joe Doe 1',
                  interval: 1,
                  previousWin: 1993,
                  followingWin: 1994
                }
              ],
              max: [
                {
                  producer: 'John Doe 2',
                  interval: 9,
                  previousWin: 2002,
                  followingWin: 2011
                }
              ]
            }
          }
        }
      }
    }
  })
  @HttpCode(HttpStatus.OK)
  async getMovies() {
    return this.moviesService.getMovies()
  }
}
