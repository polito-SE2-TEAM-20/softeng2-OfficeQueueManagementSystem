import { Body, Controller, Get, Post } from "@nestjs/common";
import { QueueService } from "./queue.service";

@Controller('queues')
export class QueueController {
 constructor(private qService :QueueService){}   

 @Get()
 async retrieveServices() {
    return {
      services: await this.qService.retrieveServices()
    }
 }

 @Post('lastTicket')
 async getLastTicket(@Body() body: any) {
    //Used for DEBUGGING: console.log(body.service)
    return {
        lastTicket: await this.qService.getLastTicket(body.service)
    }
 }

 @Post("newTicket")
 async insertNewTicket(@Body() b: any){
    //console.log(b.service);
    return{
        ticketInserted: await this.qService.insertNewTicket(b.service)
    }
 }
}




/*
I need this functions for Queue Counters:
- Retrieve Services from the DB (at launching app) -> READ -> Developed and Tested
- Insert new Ticket with incremented Queue Counter (on clicks) -> INSERT -> Developed and Tested
- Get Queue Number given a service -> READ -> Developed and Tested
- Reset counters on the next day -> UPDATE -> NOT DEVELOPED

I need this functions for assign services:
....

*/