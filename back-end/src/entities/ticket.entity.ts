import { Column, Entity, PrimaryColumn } from 'typeorm';

import { TicketState } from '../common';

@Entity('tickets')
export class Ticket {
  @PrimaryColumn({
    type: 'integer',
  })
  position!: number;

  @PrimaryColumn({
    type: 'text',
  })
  serviceCode!: string;

  @Column({
    type: 'integer',
    nullable: true,
    default: null,
  })
  counterId!: number | null;

  @Column({
    type: 'integer',
    nullable: false,
    default: TicketState.notAssigned,
  })
  state!: number;

  @Column({
    type: 'integer',
    nullable: false,
    default: null,
  })
  globalPosition!: number;
}
