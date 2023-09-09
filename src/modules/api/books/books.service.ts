import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from './books.entity';
import { Repository } from 'typeorm';
import { CreateBookDTO } from './books.dto';

@Injectable()
export class BooksService {
  @InjectRepository(Books)
  private readonly repository: Repository<Books>;

  public getAll(): Promise<Books[]> {
    return this.repository.find({
      // relations: { author: true },
    });
  }

  public getByID(id: number): Promise<Books> {
    return this.repository.findOneBy({ id: id });
  }

  public createOne(body: CreateBookDTO): Promise<Books> {
    const book: Books = new Books();

    book.author_id = body.author_id;
    book.category = body.category;
    book.isbn = body.isbn;
    book.title = body.title;
    book.edition = body.edition;

    return this.repository.save(book);
  }
}
