import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; 
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest Blog API')
    .setDescription('Nest API for authors and books ')
    .setVersion('1.0')
    .build();

  // tells the swagger module to create the document
  // with the config options we just built up
  const document = SwaggerModule.createDocument(app, config);

  // sets the route for the docs, adds it to the our app
  // and passes in the documentation
  SwaggerModule.setup('/docs', app, document);
app.listen(process.env.PORT || 3000);}
bootstrap();
