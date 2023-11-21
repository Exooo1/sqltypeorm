import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../../entity/books.entity';
import { ManufacturerEntity } from '../../entity/manufacturer.entity';
import { Gamers } from '../../entity/gamers.entity';
import { PC } from '../../entity/pc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, ManufacturerEntity, Gamers, PC])],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
