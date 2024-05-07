import { Module } from '@nestjs/common';
import { TestModule } from './TestModule/Test.module';



@Module({
  imports: [TestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
