import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NotifyMe API')
    .setDescription('Backend for managing user notifications and logs')
    .setVersion('1.0')
    .addServer('/v1') // versionamento da API
    .setContact('Daniel Camilo', 'https://github.com/danicvan', 'danicvan@hotmail.com')
    .setExternalDoc('Documentação Oficial', 'https://notifyme.docs.com') // opcional
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/v1/api', app, document, {
    customSiteTitle: 'NotifyMe Docs',
    customfavIcon: 'https://raw.githubusercontent.com/danicvan/assets/main/favicon.ico',
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    customCss: `
      .topbar-wrapper img {content:url('https://raw.githubusercontent.com/danicvan/assets/main/logo.png'); height:40px;}
    `,
  });

  await app.listen(3000);
}
bootstrap();
