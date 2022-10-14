import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('services')
export class Service {
  @PrimaryColumn({
    type: 'text',
  })
  code!: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  name!: string;

  @Column({
    type: 'integer',
    nullable: false,
    default: 0,
  })
  expectedTimeSeconds!: number;
}
