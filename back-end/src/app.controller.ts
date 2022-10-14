import { Controller, Get } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { Service } from './entities';

@Controller()
export class AppController {
  constructor(private dataSource: DataSource) {}

  @Get('/services')
  async getServices(): Promise<any[]> {
    return await this.dataSource.getRepository(Service).findBy({});
  }
}
