import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialTable1689568241736 implements MigrationInterface {
  //authors
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE authors (
        id serial PRIMARY KEY, 
        name text NOT NULL, 
        created_at timestamp DEFAULT NOW(),
        updated_at timestamp,
        deleted_at timestamp
    );
    `);

    //books
    await queryRunner.query(`
    CREATE TABLE books (
        id serial PRIMARY KEY, 
        title text NOT NULL, 
        isbn text UNIQUE NOT NULL,
        author_id bigint NOT NULL, 
        published_at text,
        edition int,
        category text,
        created_at timestamp DEFAULT NOW(),
        updated_at timestamp,
        deleted_at timestamp,
        FOREIGN KEY (author_id)
        REFERENCES authors (id)
    );
    `);

    //index
    await queryRunner.query(`
    CREATE INDEX books_title_idx ON books(title) ;
    CREATE INDEX books_author_id_idx ON books(author_id) ;
    CREATE INDEX authors_name_idx ON authors(name) ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
