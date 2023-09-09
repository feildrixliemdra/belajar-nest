import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Books } from './books.entity';
import { CreateBookDTO } from './books.dto';

@Controller('books')
export class BooksController {
  @Inject(BooksService)
  private readonly bookService: BooksService;

  /**
   * getAll
   */
  @Get()
  public getAll(): Promise<Books[]> {
    return this.bookService.getAll();
  }
  @Get('id')
  public getByID(@Param('id', ParseIntPipe) id: number): Promise<Books> {
    return this.bookService.getByID(id);
  }

  @Post()
  public create(@Body() body: CreateBookDTO): Promise<Books> {
    return this.bookService.createOne(body);
  }
}
