import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { CountryEntity } from './entity/country.entity';
import { UserModule } from './controllers/user/user.module';
import { CountryModule } from './controllers/country/country.module';
import { MetadataUser } from './entity/metadaUser.entity';
import { MetadataUserModule } from './metadata-user/metadata-user.module';
import { Book } from './entity/books.entity';
import { ManufacturerEntity } from './entity/manufacturer.entity';
import { BooksModule } from './controllers/books/books.module';
import { Gamers } from './entity/gamers.entity';
import { PC } from './entity/pc.entity';

@Module({
  imports: [
    BooksModule,
    CountryModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [
          UserEntity,
          CountryEntity,
          MetadataUser,
          Book,
          ManufacturerEntity,
          PC,
          Gamers,
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    MetadataUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
