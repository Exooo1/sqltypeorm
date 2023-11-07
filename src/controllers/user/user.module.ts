import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../../entity/user.entity";
import { CountryEntity } from "../../entity/country.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity,CountryEntity])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {
}
