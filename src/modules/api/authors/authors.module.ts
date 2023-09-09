import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Authors } from './authors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Authors])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
