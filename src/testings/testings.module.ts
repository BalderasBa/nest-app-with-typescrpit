import { Module } from '@nestjs/common';
import { TestingsController } from './testings.controller';
import { TestingsService } from './testings.service';

@Module({
  controllers: [TestingsController],
  providers: [TestingsService],
  imports: [],
})
export class TestingsModule {}
