import { UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

export const AuthenticatedOnly = () => UseGuards(JwtAuthGuard);
