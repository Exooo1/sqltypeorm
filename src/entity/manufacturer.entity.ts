import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Book } from './books.entity';

@Entity('manufacturer')
export class ManufacturerEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'text' })
  name: string;

  @OneToOne(() => Book, (book) => book.manufacturer)
  @JoinColumn()
  book: Book;
}
