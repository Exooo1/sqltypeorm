import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../../entity/books.entity';
import { ManufacturerEntity } from '../../entity/manufacturer.entity';
import { PC } from '../../entity/pc.entity';
import { Gamers } from '../../entity/gamers.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookBase: Repository<Book>,
    @InjectRepository(ManufacturerEntity)
    private readonly manuBase: Repository<ManufacturerEntity>,
    @InjectRepository(PC)
    private readonly pcBase: Repository<PC>,
    @InjectRepository(Gamers)
    private readonly gamersBase: Repository<Gamers>,
  ) {}
  async getBooks() {
    return {
      books: await this.bookBase.find({ relations: { manufacturer: true } }),
      manu: await this.manuBase.find({ relations: { book: true } }),
    };
  }

  async addBooks(data: any) {
    const manu = await this.manuBase.save({ name: 'ABC' });
    const books = await this.bookBase.findBy({ id: 5 });
    books[0].manufacturer = [...books[0].manufacturer, manu];
    const book = new Book();
    book.name = '1994';
    book.year = 1900;
    book.manufacturer.push(manu);
    await this.bookBase.save(book);
    return '';
  }

  async createManu(data: any) {
    return this.manuBase.save({ name: 'School' });
  }

  async getPC() {
    return {
      pc: await this.pcBase.find({ relations: { gamers: true } }),
      gamers: await this.gamersBase.find({ relations: { pc: true } })
    };
  }

  async createPC(data: any) {
    return this.pcBase.save({ name: 'Intel' });
  }

  async createGamers(data:any) {
    const pc = await this.pcBase.findOneBy({ id: 2 });
    return await this.gamersBase.save({ name: 'jenya', pc });
  }
}
