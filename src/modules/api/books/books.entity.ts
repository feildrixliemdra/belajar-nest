import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Authors } from '../authors/authors.entity';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'text' })
  public title: string;

  @Column({ type: 'text' })
  public isbn: string;

  @Column({ type: 'int4' })
  public author_id: number;

  @Column({ type: 'int4' })
  public edition: number;

  @Column({ type: 'text' })
  public category: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  public updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
  public deletedAt!: Date;

  @ManyToOne((type) => Authors, (author) => author.books)
  @JoinColumn({ name: 'author_id' })
  public author: Authors;
}
