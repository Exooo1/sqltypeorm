import {Module} from '@nestjs/common';
import {MetadataUserController} from './metadata-user.controller';
import {MetadataUserService} from './metadata-user.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MetadataUser} from '../entity/metadaUser.entity';
import {CountryEntity} from "../entity/country.entity";

@Module({
  imports: [TypeOrmModule.forFeature([MetadataUser,CountryEntity])],
  controllers: [MetadataUserController],
  providers: [MetadataUserService],
})
export class MetadataUserModule {}
