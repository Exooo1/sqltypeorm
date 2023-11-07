import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CountryController } from "./country.controller";
import { CountryService } from "./country.service";
import { CountryEntity } from "../../entity/country.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity])],
  controllers: [CountryController],
  providers: [CountryService]
})
export class CountryModule {
}
