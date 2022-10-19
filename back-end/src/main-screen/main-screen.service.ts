import { Injectable } from '@nestjs/common';
import { Ticket,TicketsQueue } from 'src/entities';
import { DataSource, Equal } from 'typeorm';

@Injectable()
export class MainScreenService {

    constructor(
        private dataSource :DataSource
    ){};

    async retrieveLastFive() {
        const all = await this.dataSource.getRepository(Ticket).findBy({
            state: Equal(1)
        })
        const tickets = all.map(t => t.serviceCode + t.position)
        return tickets
    }

}