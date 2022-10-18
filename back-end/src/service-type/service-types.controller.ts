import { Controller, Get } from '@nestjs/common';
import { ServiceTypesService } from './service-types.service';

@Controller('service-types')
export class ServiceTypesController {

    constructor(private serviceType: ServiceTypesService){}

    @Get()
    async getServiceTypes() {
        return {
            serviceTypes: await this.serviceType.getAllServiceTypes()
        }
    }
}

