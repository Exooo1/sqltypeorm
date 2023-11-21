import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Gamers } from './gamers.entity';

@Entity('pc')
export class PC {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'text' })
  name: string;

  @OneToMany(() => Gamers, (gamers) => gamers.pc)
  @JoinColumn()
  gamers: Gamers[];
}
