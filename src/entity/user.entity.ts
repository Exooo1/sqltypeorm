import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { CountryEntity } from "./country.entity";
import {MetadataUser} from "./metadaUser.entity";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({ default: "empty" })
  lastName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => CountryEntity, (country) => country.users)
  country?: CountryEntity;

  @OneToOne(() => MetadataUser)
  @JoinColumn()
  metadata: any
}
