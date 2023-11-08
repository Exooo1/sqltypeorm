import {Module} from '@nestjs/common';
import {MetadataUserController} from './metadata-user.controller';
import {MetadataUserService} from './metadata-user.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MetadataUser} from '../entity/metadaUser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MetadataUser])],
  controllers: [MetadataUserController],
  providers: [MetadataUserService],
})
export class MetadataUserModule {}
