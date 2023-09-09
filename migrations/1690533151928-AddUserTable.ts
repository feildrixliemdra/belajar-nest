import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserTable1690533151928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

        CREATE TABLE users(
            id uuid  default uuid_generate_v4() PRIMARY KEY , 
            name text NOT NULL, 
            email text UNIQUE NOT NULL,
            password text NOT NULL, 
            created_at timestamp DEFAULT NOW(),
            updated_at timestamp,
            deleted_at timestamp 
        );
        CREATE INDEX users_name_idx ON users(name);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
