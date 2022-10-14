import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { DataSource } from 'typeorm';

import { User } from '../entities';

@Injectable()
export class AuthService {
  private readonly HASH_ROUNDS = 10;

  constructor(private dataSource: DataSource, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.dataSource
      .getRepository(User)
      .findOneBy({ username });

    if (user && (await this.validatePassword(password, user.password))) {
      return user;
    }

    return null;
  }

  async login(user: User) {
    const payload = { username: user.username };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validatePassword(password: string, hash: string): Promise<boolean> {
    return await compare(password, hash);
  }

  async hashPassword(password: string): Promise<string> {
    return await hash(password, this.HASH_ROUNDS);
  }
}
