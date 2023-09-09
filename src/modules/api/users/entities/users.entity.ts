import { UUID } from 'crypto';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryColumn()
  public id: UUID;

  @Column({ name: 'name', type: 'text' })
  public name: string;

  @Column({ name: 'password', type: 'text' })
  public password: string;

  @Column({ name: 'email', type: 'text' })
  public email: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  public updatedAt!: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
  public deletedAt!: Date;
}
