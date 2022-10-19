import { Injectable } from '@nestjs/common';
import { Ticket } from 'src/entities';
import { DataSource, Equal } from 'typeorm';

@Injectable()
export class MainScreenService {

    constructor(
        private dataSource :DataSource
    ){};

    async retrieveLastFive() {

        const last = await this.dataSource.getRepository(Ticket)
        .createQueryBuilder("ticket")
        .where("ticket.state = 1")
        .orderBy("ticket.servedAt", "DESC")
        .limit(5)
        .getMany()
        
        const conc = last.map(t => t.serviceCode + t.position)

        return conc
    }

}