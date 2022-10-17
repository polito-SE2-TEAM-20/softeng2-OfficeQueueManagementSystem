import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { DataSource } from 'typeorm';

import { JWT_SECRET, UserJwtPayload } from '../common';
import { User } from '../entities';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private dataSource: DataSource) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: JWT_SECRET,
    });
  }

  async validate({ username }: any): Promise<UserJwtPayload> {
    const _user = await this.dataSource
      .getRepository(User)
      .findOneBy({ username });

    if (!_user) {
      throw new UnauthorizedException();
    }

    const user: UserJwtPayload = { ..._user };

    delete user.password;

    return user;
  }
}
