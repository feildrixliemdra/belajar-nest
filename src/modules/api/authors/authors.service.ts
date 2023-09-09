import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Authors } from './authors.entity';
import { Repository } from 'typeorm';
import { CreateAuthorDTO } from './authors.dto';

@Injectable()
export class AuthorsService {
  @InjectRepository(Authors)
  private readonly authorRepository: Repository<Authors>;

  /**
   * getAll
   */
  public getAll(): Promise<Authors[]> {
    return this.authorRepository.find({
      order: { id: 'DESC' },
      relations: { books: true },
    });
  }

  /**
   * getByID
   */
  public getByID(id: number): Promise<Authors> {
    return this.authorRepository.findOneBy({ id: id });
  }

  /**
   * createOne
   */
  public createOne(body: CreateAuthorDTO): Promise<Authors> {
    const author: Authors = new Authors();
    author.name = body.name;

    return this.authorRepository.save(author);
  }
}
