import { NestFactory } from '@nestjs/core'
import { SeedRootModule } from './src/infra/database/seeds/seed-root.module'
import { MoviesSeed } from './src/infra/database/seeds/movies.seed'

async function bootstrap() {
  const app = await NestFactory.create(SeedRootModule)
  const seed = app.get(MoviesSeed)
  await seed.runSeed()
  await app.close()
}

bootstrap()
