import {Controller, Get} from '@nestjs/common';
import {MetadataUserService} from "./metadata-user.service";

@Controller('metadata-user')
export class MetadataUserController {
    constructor(private readonly metadataService:MetadataUserService) {
    }

    @Get()
    getMetadata(){
        return this.metadataService.getMetadata()
    }
}
