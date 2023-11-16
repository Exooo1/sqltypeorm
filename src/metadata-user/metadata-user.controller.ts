import {Body, Controller, Get, Post} from '@nestjs/common';
import {MetadataUserService} from "./metadata-user.service";
import {SetUserMetadataDTO} from "../controllers/user/user.dto";

@Controller('metadata-user')
export class MetadataUserController {
    constructor(private readonly metadataService:MetadataUserService) {
    }

    @Get()
    getMetadata(){
        return this.metadataService.getMetadata()
    }

    @Post('country-metadata')
    metadataCountries(@Body() data:SetUserMetadataDTO){
        return this.metadataService.metadataCountry(data)
    }
}
