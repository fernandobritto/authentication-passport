'reflect-metadata'

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { json, urlencoded } from 'express'
import { ValidationPipe, VersioningType } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { API_PREFIX } from 'src/domain/helpers/constants'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })

  app.use(json({ limit: '50mb' }))
  app.use(urlencoded({ extended: true, limit: '50mb' }))

  app
    .enableVersioning({
      type: VersioningType.URI,
      defaultVersion: '1'
    })
    .setGlobalPrefix(API_PREFIX)

  const config = new DocumentBuilder()
    .setTitle('Golden Raspberry Awards API')
    .setDescription('API Documentation for developers')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(`${API_PREFIX}/:version/docs`, app, document)

  const configService = app.get<ConfigService>(ConfigService)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  )

  await app.listen(configService.get('PORT', { infer: true }) || 8084)
}
bootstrap()
