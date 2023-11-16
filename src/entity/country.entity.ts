import {
  Column,
  CreateDateColumn,
  Entity, JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { MetadataUser } from './metadaUser.entity';

@Entity({ name: 'countries' })
export class CountryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;

  @OneToMany(() => UserEntity, (user) => user.country)
  users?: UserEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => MetadataUser, (metadata) => metadata.country)
  @JoinColumn()
  metadata?: any;
}
