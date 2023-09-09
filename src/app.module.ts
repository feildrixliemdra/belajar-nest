import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { BooksService } from './modules/api/books/books.service';
import { BooksModule } from './modules/api/books/books.module';
import { BooksController } from './modules/api/books/books.controller';
import { TypeormService } from './shared/typeorm/typeorm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APIModule } from './modules/api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
    APIModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
