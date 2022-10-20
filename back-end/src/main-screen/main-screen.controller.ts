import { Controller, Get } from '@nestjs/common';

import { MainScreenService } from './main-screen.service';

@Controller('main-screen')
export class MainScreenController {
  constructor(private mainScreen: MainScreenService) {}

  @Get()
  async retrieveLastFive() {
    return {
      tickets: await this.mainScreen.retrieveLastFive(),
    };
  }
}
