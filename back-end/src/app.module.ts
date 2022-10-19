import { resolve } from 'path';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { entities } from './entities';
import { MainScreenModule } from './main-screen/main-screen.module';
import { QueueModule } from './queue/queue.module';
import { ServicesModule } from './service-type/service-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      entities,
      database: resolve('./db/office_queue.db'),
      synchronize: false,
    }),
    AuthModule,
    QueueModule,
    ServicesModule,
    MainScreenModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
