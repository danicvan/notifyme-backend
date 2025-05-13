import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('v1');

  const config = new DocumentBuilder()
    .setTitle('NotifyMe API')
    .setDescription('API for sending notifications and logging events.')
    .setVersion('1.0')
    .addTag('Users')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
      },
      'access-token', // esse nome será usado no Swagger para identificar o auth
    )
    .setContact('Daniel Camilo', 'https://github.com/danicvan', 'danicvan@hotmail.com')
    .setExternalDoc('GitHub Repository', 'https://github.com/danicvan/notifyme-backend')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('v1/api', app, document);

  await app.listen(3000);
  console.log(`🚀 API running at http://localhost:3000/v1/api`);
}
bootstrap();
