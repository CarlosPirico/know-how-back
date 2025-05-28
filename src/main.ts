import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove propriedades não definidas no DTO
      forbidNonWhitelisted: true, // lança erro se campos extras forem enviados
      transform: true, // transforma payload em instância de DTO
    }),
  );
  const config = new DocumentBuilder()
    .setTitle("API de Usuários e Autenticação")
    .setDescription("Documentação da API NestJS com JWT")
    .setVersion("1.0")
    .addBearerAuth() // importante para JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document); // /api será a rota do Swagger

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
