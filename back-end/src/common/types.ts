import { User } from '../entities';

export type UserJwtPayload = Omit<User, 'password'> & { password?: string };
