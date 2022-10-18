import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { Service, Ticket } from '../entities';

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

    //USED FOR DEBUGGING console.log(ticketCounter);
    if (ticketCounter != null) {
      console.log('hi');
      const newCounter = ticketCounter.max;
      this.dataSource
        .getRepository(Ticket)
        .createQueryBuilder()
        .insert()
        .into(Ticket)
        .values([
          {
            position: newCounter + 1,
            serviceCode: service,
          },
        ])
        .execute();
    } else {
      console.log('New Row inserted for service: ' + service);
      this.dataSource
        .getRepository(Ticket)
        .createQueryBuilder()
        .insert()
        .into(Ticket)
        .values([
          {
            position: 1,
            serviceCode: service,
          },
        ])
        .execute();
    }
  }

  //Function to GET last ticket for a specified service
  async getLastTicket(service: string): Promise<Ticket[]> {
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
      .getMany();

    return ticket;
  }
}
