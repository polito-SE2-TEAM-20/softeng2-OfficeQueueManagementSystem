import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tickets_queue')
export class TicketsQueue {
  @PrimaryColumn({
    type: 'text',
  })
  ticketCode!: string;

  @PrimaryGeneratedColumn('increment')
  position!: string;
}
