import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ManufacturerEntity } from './manufacturer.entity';
import { PC } from './pc.entity';

@Entity('gamers')
export class Gamers {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'text' })
  name: string;

  @ManyToOne(() => PC, (pc) => pc.gamers)
  @JoinColumn()
  pc: PC;
}
