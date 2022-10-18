import { Injectable } from '@nestjs/common';
import { Service } from 'src/entities';
import { DataSource } from 'typeorm';

@Injectable()
export class ServiceTypesService {

    constructor(
        private dataSource :DataSource
    ){};

    async getAllServiceTypes() {
        const services = await this.dataSource.getRepository(Service).findBy({})
        return services.map(s => s);
    }
}
