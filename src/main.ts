import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Inject, Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cfg: ConfigService = app.get(ConfigService);
  const port: number = cfg.get<number>('APP_PORT');

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(port || 3000, () => {
    Logger.log(`Server running on port ${port}`, 'ServerRunning');
  });
}
bootstrap();
