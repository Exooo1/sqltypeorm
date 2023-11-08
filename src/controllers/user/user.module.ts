import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../entity/user.entity';
import { CountryEntity } from '../../entity/country.entity';
import { MetadataUser } from '../../entity/metadaUser.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, CountryEntity, MetadataUser]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
