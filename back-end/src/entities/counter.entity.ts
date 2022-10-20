import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('counters')
export class Counter {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({
    type: 'text',
    nullable: false,
    default: '',
  })
  name!: string;
}
