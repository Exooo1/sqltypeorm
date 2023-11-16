import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetadataUser } from '../entity/metadaUser.entity';
import { Repository } from 'typeorm';
import { SetUserMetadataDTO } from '../controllers/user/user.dto';
import { CountryEntity } from '../entity/country.entity';

@Injectable()
export class MetadataUserService {
  constructor(
    @InjectRepository(MetadataUser)
    private readonly metadataRepository: Repository<MetadataUser>,
    @InjectRepository(CountryEntity)
    private readonly countryRepository: Repository<CountryEntity>,
  ) {}

  async getMetadata() {
    return await this.metadataRepository.find({ relations: ['country'] });
  }

  async metadataCountry(data: SetUserMetadataDTO) {
    const { age, city, weight } = data;
    const coun = await this.countryRepository.save({ country: 'Ogorod' });
    const met = await this.metadataRepository.save({
      age,
      city,
      weight,
      country: coun,
    });
    await this.countryRepository.save({ ...coun, metadata: met });
    return '';
  }
}
