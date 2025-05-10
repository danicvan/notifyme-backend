import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
import { NotificationModule } from './notification/notification.module';

import { LogService } from './log/log.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService, LogService],
})
export class AppModule {}
