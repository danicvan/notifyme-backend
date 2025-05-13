import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aplica validações globais
  app.useGlobalPipes(new ValidationPipe());

  // Prefixo global da aplicação
  app.setGlobalPrefix('v1');

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('NotifyMe API')
    .setDescription('API for sending notifications and managing users.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Documentação acessível em /v1/api
  SwaggerModule.setup('v1/api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
