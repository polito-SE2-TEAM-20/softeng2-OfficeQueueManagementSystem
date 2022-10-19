import { Body, Controller, Get, Post } from '@nestjs/common';

import { QueueService } from './queue.service';

@Controller('queues')
export class QueueController {
  constructor(private qService: QueueService) {}

  @Get()
  async retrieveServices() {
    return {
      services: await this.qService.retrieveServices(),
    };
  }

  @Post('lastTicket')
  async getLastTicket(@Body() body: any) {
    //Used for DEBUGGING: console.log(body.service)
    return {
      lastTicket: await this.qService.getLastTicket(body.service),
    };
  }

 @Post('nextInTheQueue')
 async getNextInTheQueue(@Body() body: any) {
    //The body should contain the counter which is going to accept the client
    //in order to retrieve all the services queues
    return {
        nextInTheQueue: await this.qService.getNextInTheQueue(body.counter)
    }
 }

 @Post("newTicket")
 async insertNewTicket(@Body() b: any){
    //console.log(b.service);
    return{
        ticketInserted: await this.qService.insertNewTicket(b.service)
    }
 }

 @Post("newCounter")
 async createNewCounter(@Body() b: any){
    //The body should contain the name for the counter to be created
    return{
        ticketInserted: await this.qService.createNewCounter(b.name)
    }
 }

 @Post("assignServiceToCounter")
 async assignServiceToCounter(@Body() b: any){
    //The body should contain the code of the counter and the code of the service to be associated
    return{
        ticketInserted: await this.qService.assignServiceToCounter(b.counterId, b.serviceCode)
    }
 }

 @Post("removeServiceFromCounter")
 async removeServiceFromCounter(@Body() b: any){
    //The body should contain the code of the counter and the code of the service to be removed
    return{
        ticketInserted: await this.qService.removeServiceFromCounter(b.counterId, b.serviceCode)
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
- Create a new Counter -> CREATE 
- Assign to that counter a certain Service -> CREATE 

*/
