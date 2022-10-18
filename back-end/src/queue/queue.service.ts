import { Injectable, MaxFileSizeValidator } from '@nestjs/common';
import { Counter, CounterServiceType, Service, Ticket } from 'src/entities';
import { DataSource } from 'typeorm';

@Injectable()
export class QueueService {
    constructor(
        private dataSource :DataSource
    ){};
    
    //Function to retrieve all services
    async retrieveServices() {
        const services = await this.dataSource.getRepository(Service).findBy({})
        return services.map(s => s.name);
    }

    //Function to Insert a new ticket for a specified service
    async insertNewTicket(service) {
        const ticketCounter = await this.dataSource.getRepository(Ticket).createQueryBuilder("t")
        .select("MAX(t.position)", "max")
        .where("t.serviceCode = :serviceCode", { serviceCode: service })
        .getRawOne();

        const globalPosition = await this.dataSource.getRepository(Ticket).createQueryBuilder("t")
        .select("MAX(t.globalPosition)", "maxGlobalPos")
        .getRawOne();

        //USED FOR DEBUGGING console.log(ticketCounter);
        const newCounter = ticketCounter ? ticketCounter.max : 0;
        const newGlobalCounter = globalPosition ? globalPosition.maxGlobalPos : 0;

        await this.dataSource.getRepository(Ticket).save({
            position: newCounter+1,
            serviceCode: service,
            globalPosition: newGlobalCounter+1
        });
    }

    //Function to GET last ticket for a specified service
    async getLastTicket(service :String) :Promise<Ticket> {
        const ticketCounter = await this.dataSource.getRepository(Ticket).createQueryBuilder("ticket")
        .select("MAX(ticket.position)", "max")
        .where("ticket.serviceCode = :service", { service: service })
        .getRawOne();

        const ticket = await this.dataSource.getRepository(Ticket)
        .createQueryBuilder("t")
        .where("t.serviceCode = :service ", {service: service})
        .andWhere("t.position = :max", {max: ticketCounter.max})
        .getRawOne();

        return ticket;
    }

    async getNextInTheQueue(counterId) {
        //GET Array of services for a counter
        const servicesSQL = await this.dataSource.getRepository(CounterServiceType)
        .createQueryBuilder("cst")
        .select("serviceCode", "service")
        .where("cst.counterId = :counterId", {counterId: counterId})
        .getRawMany();

        const services = servicesSQL.map(s => s.service);
        //console.log(services);
        
        //COUNT for each service the number of tickets whose state is "not assigned"
        //GET the avgTimeToServe client for each service
        //Estimate (avgTimeToServe * CountOfService) -> 'Longest Queue'
        let counters = new Map();
        
        for (const service in services) {
            const c = await this.dataSource.getRepository(Ticket)
            .createQueryBuilder('t')
            .where("t.serviceCode = :serviceCode", {serviceCode : services[service]})
            .andWhere("t.state = 0")
            .getCount();

            const avgTimeService = await this.dataSource.getRepository(Service)
            .createQueryBuilder('s')
            .select("expectedTimeSeconds", "time")
            .where("s.code = :serviceCode", {serviceCode : services[service]})
            .getRawOne();
            //console.log(services[service]); 
            counters.set(services[service], c * avgTimeService.time);
            //In this way I have a Map like: {'A': 5tickets*50sEach}
        }

        const longestQueueVal = Math.max(...counters.values());
        let longestQueue = "";

        counters.forEach((val, key) =>{
            if(val == longestQueueVal)
                longestQueue = key
        })

        //I take max position for a not Assigned ticket from the 'longest queue'
        const maxTicket = await this.dataSource.getRepository(Ticket)
        .createQueryBuilder("ticket")
        .select("MAX(ticket.position)", "max")
        .where("ticket.state = :state", {state: 0})
        .andWhere("ticket.serviceCode = :service", { service: longestQueue })
        .getRawOne();

        //I take the ticket in the position previously computed and from the longest queue
        const next = await this.dataSource.getRepository(Ticket)
        .createQueryBuilder('t')
        .where("t.serviceCode = :service ", {service: longestQueue})
        .andWhere("t.position = :max", {max: maxTicket.max})
        .getRawOne();

        await this.dataSource.getRepository(Ticket).save({
            position: next.t_position,
            serviceCode: next.t_serviceCode,
            counterId: counterId,
            state: 1
        });

        return (next.t_serviceCode+next.t_position);

        //Pick ticket from the Longest Queue and return it

        //UPDATE ticket counterID
    }


    //Function to create a new counter
    async createNewCounter(name) {
        await this.dataSource.getRepository(Counter).save({
            name: name
        });
    }

    
    //Function to assign a service to a counter
    async assignServiceToCounter(counterId, serviceCode) {
        await this.dataSource.getRepository(CounterServiceType).save({
            counterId: counterId,
            serviceCode: serviceCode
        });
    }

    //Function to remove a service from a counter
    async removeServiceFromCounter(counterId, serviceCode) {
        await this.dataSource.getRepository(CounterServiceType).delete({
            counterId: counterId,
            serviceCode: serviceCode
        })
    }
}
