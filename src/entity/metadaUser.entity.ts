import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
