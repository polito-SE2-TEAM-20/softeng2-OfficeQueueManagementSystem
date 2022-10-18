import { Module } from '@nestjs/common';

import { MainScreenController } from './main-screen.controller';
import { MainScreenService } from './main-screen.service';

@Module({
  providers: [MainScreenService],
  controllers: [MainScreenController],
})
export class MainScreenModule {}
