import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { join } from 'path'
import { readFileSync } from 'fs'
import { MoviesEntity } from 'src/domain/infra/entities/movies.entity'

@Injectable()
export class MoviesSeed {
  constructor(
    @InjectRepository(MoviesEntity)
    private readonly moviesRepository: Repository<MoviesEntity>
  ) {}

  async runSeed(): Promise<void> {
    // Caminho até o arquivo Movielist.csv na pasta assets
    const csvPath = join(__dirname, '../../../../assets/Movielist.csv')

    // Lê todo o conteúdo do CSV como string
    const fileContent = readFileSync(csvPath, 'utf-8')

    // Separa em linhas
    const lines = fileContent.split('\n').map((line) => line.trim())

    // Remove o cabeçalho => "year;title;studios;producers;winner"
    lines.shift()

    // Array para agrupar os registros antes de salvar no banco
    const moviesToInsert: Partial<MoviesEntity>[] = []

    for (const line of lines) {
      // Se estiver vazia (pode acontecer caso haja uma linha em branco no final), pula
      if (!line) {
        continue
      }

      // Quebramos a linha pelos delimitadores ";"
      const [yearRaw, title, studios, producers, winnerRaw] = line
        .split(';')
        .map((item) => item.trim())

      // Converte ano para número
      const year = parseInt(yearRaw, 10)

      // Converte 'yes' em booleano
      const winner = winnerRaw?.toLowerCase() === 'yes'

      moviesToInsert.push({
        year,
        title,
        studios,
        producers,
        winner
      })
    }

    // Salva todos os registros de uma vez
    await this.moviesRepository.save(moviesToInsert)

    console.log(
      `Seed executada com sucesso! ${moviesToInsert.length} filmes inseridos.`
    )
  }
}
