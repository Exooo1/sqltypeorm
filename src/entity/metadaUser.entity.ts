import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {CountryEntity} from "./country.entity";

@Entity({ name: 'metadata-user' })
export class MetadataUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  age: number;

  @Column('text')
  city: string;

  @Column('int')
  weight: number;

  @OneToOne(() => CountryEntity, (country) => country.metadata)
  @JoinColumn()
  country?: any;
}
