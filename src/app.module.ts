import { Module } from '@nestjs/common';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { TestingsModule } from './testings/testings.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';

@Module({
  imports: [
    UsersModule,
    TestingsModule,
    DatabaseModule,
    EmployeesModule,
    ThrottlerModule.forRoot([
      // short: limit of 3 requests per second (1000 milisecond => 1 second)
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      // medium: limit of 20 requests per 10 second
      {
        name: 'medium',
        ttl: 10000,
        limit: 20,
      },
      // long: limit of 100 requests per one minute
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
    ]),
    MyLoggerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
