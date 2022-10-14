import { User } from '../entities';

export type UserJwtPayload = Pick<User, 'username'>;
