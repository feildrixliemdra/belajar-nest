import { Module } from '@nestjs/common';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BooksModule, AuthorsModule, UsersModule, AuthModule],
})
export class APIModule {}
