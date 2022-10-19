import { CounterServiceType } from './counter-service-type.entity';
import { Counter } from './counter.entity';
import { Service } from './service.entity';
import { Ticket } from './ticket.entity';
import { User } from './user.entity';

export * from './user.entity';
export * from './service.entity';
export * from './ticket.entity';
export * from './counter-service-type.entity';
export * from './counter.entity';

export const entities = [
  User,
  Service,
  Ticket,
  Counter,
  CounterServiceType,
];
