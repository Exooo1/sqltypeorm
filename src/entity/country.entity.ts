import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: "countries" })
export class CountryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;

  @OneToMany(() => UserEntity, (user) => user.country)
  users: UserEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
