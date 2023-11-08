import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {MetadataUser} from "../entity/metadaUser.entity";
import {Repository} from "typeorm";

@Injectable()
export class MetadataUserService {
    constructor(
        @InjectRepository(MetadataUser)
        private readonly metadataRepository: Repository<MetadataUser>,
    ) {
    }

    async getMetadata(){
        return await this.metadataRepository.find()
    }
}
