import { resolve } from 'path';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { entities } from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      entities,
      database: resolve('./db/office_queue.db'),
      synchronize: false,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
