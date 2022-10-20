import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { TicketState } from '../common';
import { getTicketCode } from '../common/utils';
import { Counter, CounterServiceType, Service, Ticket } from '../entities';

@Injectable()
export class QueueService {
  constructor(private dataSource: DataSource) {}

  //Function to retrieve all services
  async retrieveServices() {
    const services = await this.dataSource.getRepository(Service).findBy({});
    return services.map(s => s.name);
  }

  //Function to Insert a new ticket for a specified service
  async insertNewTicket(service) {
    const ticketCounter = await this.dataSource
      .getRepository(Ticket)
      .createQueryBuilder('t')
      .select('MAX(t.position)', 'max')
      .where('t.serviceCode = :serviceCode', { serviceCode: service })
      .getRawOne();

    const globalPosition = await this.dataSource
      .getRepository(Ticket)
      .createQueryBuilder('t')
      .select('MAX(t.globalPosition)', 'maxGlobalPos')
      .getRawOne();

    //USED FOR DEBUGGING console.log(ticketCounter);
    const newCounter = ticketCounter ? ticketCounter.max : 0;
    const newGlobalCounter = globalPosition ? globalPosition.maxGlobalPos : 0;

    await this.dataSource.getRepository(Ticket).save({
      position: newCounter + 1,
      serviceCode: service,
      globalPosition: newGlobalCounter + 1,
    });

    const s = await this.dataSource.getRepository(Service).findOneBy({
      code: service,
    });

    const peopleInQueue = await this.dataSource.getRepository(Ticket).countBy({
      serviceCode: service,
      state: TicketState.notAssigned,
    });

    const CountersSer = await this.dataSource
      .getRepository(CounterServiceType)
      .findBy({
        serviceCode: service,
      });

    const validCounters = CountersSer.map(t => t.counterId);
    let sum = 0;
    for (const c in validCounters) {
      const numOfServices = await this.dataSource
        .getRepository(CounterServiceType)
        .countBy({
          counterId: validCounters[c],
        });

      sum += 1 / numOfServices;
    }

    let timeReq = 0;
    if (s !== null) timeReq = s.expectedTimeSeconds;
    else return null;

    //console.log("timeReq: "+ timeReq +"; PeopleInQueueForServiceA: "+ (peopleInQueue-1) + "; sum: "+sum);
    const estimatedTime = timeReq * ((peopleInQueue - 1) / sum + 0.5);
    const TicketInfo = new Map();

    TicketInfo.set('code', service + (newCounter + 1));
    TicketInfo.set('estimatedTime', estimatedTime);
    //console.log(TicketInfo)
    return {
      code: TicketInfo.get('code'),
      estimatedTime: TicketInfo.get('estimatedTime'),
    };
  }

  //Function to GET last ticket for a specified service
  async getLastTicket(service: string): Promise<Ticket> {
    const ticketCounter = await this.dataSource
      .getRepository(Ticket)
      .createQueryBuilder('ticket')
      .select('MAX(ticket.position)', 'max')
      .where('ticket.serviceCode = :service', { service })
      .getRawOne();

    const ticket = await this.dataSource
      .getRepository(Ticket)
      .createQueryBuilder('t')
      .where('t.serviceCode = :service ', { service })
      .andWhere('t.position = :max', { max: ticketCounter.max })
      .getRawOne();

    return ticket;
  }

  async getNextInTheQueue(counterId) {
    //GET Array of services for a counter
    const servicesSQL = await this.dataSource
      .getRepository(CounterServiceType)
      .createQueryBuilder('cst')
      .select('serviceCode', 'service')
      .where('cst.counterId = :counterId', { counterId })
      .getRawMany();

    const services = servicesSQL.map(s => s.service);
    //console.log(services);

    //COUNT for each service the number of tickets whose state is "not assigned"
    //GET the avgTimeToServe client for each service
    //Estimate (avgTimeToServe * CountOfService) -> 'Longest Queue'
    const counters = new Map();

    for (const service in services) {
      const c = await this.dataSource
        .getRepository(Ticket)
        .createQueryBuilder('t')
        .where('t.serviceCode = :serviceCode', {
          serviceCode: services[service],
        })
        .andWhere('t.state = 0')
        .getCount();

      const avgTimeService = await this.dataSource
        .getRepository(Service)
        .createQueryBuilder('s')
        .select('expectedTimeSeconds', 'time')
        .where('s.code = :serviceCode', { serviceCode: services[service] })
        .getRawOne();
      //console.log(services[service]);
      counters.set(services[service], c * avgTimeService.time);
      //In this way I have a Map like: {'A': 5tickets*50sEach}
    }

    const longestQueueVal = Math.max(...counters.values());
    let longestQueue = '';

    counters.forEach((val, key) => {
      if (val == longestQueueVal) longestQueue = key;
    });

    //I take max position for a not Assigned ticket from the 'longest queue'
    const maxTicket = await this.dataSource
      .getRepository(Ticket)
      .createQueryBuilder('ticket')
      .select('MAX(ticket.position)', 'max')
      .where('ticket.state = :state', { state: TicketState.notAssigned })
      .andWhere('ticket.serviceCode = :service', { service: longestQueue })
      .getRawOne();

    //I take the ticket in the position previously computed and from the longest queue
    const nextTicket = await this.dataSource
      .getRepository(Ticket)
      .createQueryBuilder('t')
      .where('t.serviceCode = :service ', { service: longestQueue })
      .andWhere('t.position = :max', { max: maxTicket.max })
      .getOne();

    if (nextTicket !== null) {
      await this.dataSource.getRepository(Ticket).update(
        {
          position: nextTicket.position,
          serviceCode: nextTicket.serviceCode,
        },
        {
          counterId,
          state: TicketState.assigned,
          servedAt: new Date().toISOString(),
        },
      );

      return getTicketCode(nextTicket);
    }

    return null;
    //Pick ticket from the Longest Queue and return it

    //UPDATE ticket counterID
  }

  //Function to create a new counter
  async createNewCounter(name) {
    await this.dataSource.getRepository(Counter).save({
      name,
    });
  }

  //Function to assign a service to a counter
  async assignServiceToCounter(counterId, serviceCode) {
    await this.dataSource.getRepository(CounterServiceType).save({
      counterId,
      serviceCode,
    });
  }

  //Function to remove a service from a counter
  async removeServiceFromCounter(counterId, serviceCode) {
    await this.dataSource.getRepository(CounterServiceType).delete({
      counterId,
      serviceCode,
    });
  }
}
