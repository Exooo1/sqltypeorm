import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { ManufacturerEntity } from './manufacturer.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'int' })
  year: number;

  @OneToOne(() => ManufacturerEntity, (manufacturer) => manufacturer.book)
  @JoinColumn()
  manufacturer: ManufacturerEntity[];
}
