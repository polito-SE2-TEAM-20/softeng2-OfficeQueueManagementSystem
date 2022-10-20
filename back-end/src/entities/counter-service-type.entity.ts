import { Entity, PrimaryColumn } from 'typeorm';

@Entity('counter_service_types')
export class CounterServiceType {
  @PrimaryColumn({
    type: 'integer',
  })
  counterId!: number;

  @PrimaryColumn({
    type: 'text',
  })
  serviceCode!: string;
}
