import { Column, Entity, PrimaryColumn } from 'typeorm';

import { UserRole } from '../common';

@Entity('users')
export class User {
  @PrimaryColumn({
    type: 'text',
  })
  username!: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  password!: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  name!: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  role!: UserRole;
}
