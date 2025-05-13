import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Json } from '@shared/types';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Test shared import
  const sharedData: Json = { status: 'shared OK' };
  console.log(sharedData);

  // Use PORT env or default
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  await app.listen(port);
  console.log(`Application listening on port ${port}`);
}
bootstrap();