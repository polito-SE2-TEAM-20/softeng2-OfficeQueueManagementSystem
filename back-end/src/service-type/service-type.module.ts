import { Module } from '@nestjs/common';

import { ServiceTypesController } from './service-types.controller';
import { ServiceTypesService } from './service-types.service';

@Module({
  providers: [ServiceTypesService],
  controllers: [ServiceTypesController],
})
export class ServicesModule {}
