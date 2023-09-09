import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Books } from '../books/books.entity';

@Entity()
export class Authors {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'text' })
  public name: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  public updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
  public deletedAt!: Date;

  @OneToMany((type) => Books, (books) => books.author)
  public books: Books[];
}
