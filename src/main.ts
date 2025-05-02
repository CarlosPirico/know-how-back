import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove propriedades não definidas no DTO
      forbidNonWhitelisted: true, // lança erro se campos extras forem enviados
      transform: true, // transforma payload em instância de DTO
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
