import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CountryEntity } from '../../entity/country.entity';
import { SetCountryDTO } from './country.dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countryRepository: Repository<CountryEntity>,
  ) {}

  getCountries() {
    return this.countryRepository.find({
      relations: {
        metadata: true,
        users: true,
      },
    });
  }

  async addCountry(data: SetCountryDTO) {
    try {
      const { country } = data;
      const foundCountry = await this.countryRepository.findOne({
        where: { country },
      });
      if (foundCountry) throw new Error('The same country!');
      const newCountry = new CountryEntity();
      newCountry.country = country;
      return this.countryRepository.save(newCountry);
    } catch (err) {
      return err.message;
    }
  }
}
