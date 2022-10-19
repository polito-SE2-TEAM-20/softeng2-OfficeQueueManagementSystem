import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { AuthenticatedOnly, CurrentUser, UserJwtPayload } from '../common';
import { User } from '../entities';

import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService, private dataSource: DataSource) {
    // skip
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Request() req: any,
  ): Promise<{ token: string } & Pick<User, 'name' | 'role'>> {
    return await this.service.login(req.user);
  }

  @AuthenticatedOnly()
  @Get('me')
  async me(@CurrentUser() user: UserJwtPayload) {
    return user;
  }
}
