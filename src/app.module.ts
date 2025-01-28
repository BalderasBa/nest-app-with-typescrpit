import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TestingsModule } from './testings/testings.module';

@Module({
  imports: [UsersModule, TestingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
