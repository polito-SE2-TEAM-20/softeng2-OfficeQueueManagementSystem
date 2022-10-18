import { Module } from '@nestjs/common';
import { MainScreenService } from './main-screen.service';
import { MainScreenController } from './main-screen.controller';

@Module({
  providers: [MainScreenService],
  controllers: [MainScreenController]
})
export class MainScreenModule {}