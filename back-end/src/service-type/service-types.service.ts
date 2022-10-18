import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { Service } from '../entities';

@Injectable()
export class ServiceTypesService {
  constructor(private dataSource: DataSource) {}

  async getAllServiceTypes() {
    const services = await this.dataSource.getRepository(Service).findBy({});
    return services.map(s => s);
  }
}
