import { Module } from '@nestjs/common';
import { TestingsController } from './testings.controller';
import { TestingsService } from './testings.service';
import { SubTestModule } from './sub-test/sub-test.module';

@Module({
  controllers: [TestingsController],
  providers: [TestingsService],
  imports: [SubTestModule],
})
export class TestingsModule {}
