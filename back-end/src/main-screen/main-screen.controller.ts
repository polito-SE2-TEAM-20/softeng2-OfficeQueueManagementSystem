import { Controller, Get } from '@nestjs/common';
import { MainScreenService } from './main-screen.service';


@Controller('main-screen')
export class MainScreenController {

    constructor(private serviceType: MainScreenService){}


}
