import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppDataSource } from './infra/database/orm-data-source'
import { MoviesModule } from './app/movies/movies.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(AppDataSource.options),
    MoviesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
