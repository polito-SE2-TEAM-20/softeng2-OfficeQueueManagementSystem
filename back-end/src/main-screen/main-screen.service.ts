import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { Counter, Ticket } from '../entities';

@Injectable()
export class MainScreenService {
  constructor(private dataSource: DataSource) {}

  async retrieveLastFive() {
    const tickets = await this.dataSource
      .getRepository(Ticket)
      .createQueryBuilder('ticket')
      .leftJoinAndMapOne(
        'ticket.counter',
        Counter,
        'c',
        'c.id = ticket.counterId',
      )
      .where('ticket.state = 1')
      .orderBy('ticket.servedAt', 'DESC')
      .limit(5)
      .getMany();

    const conc = tickets.map(t => t.serviceCode + t.position);

    return conc;
  }
}
