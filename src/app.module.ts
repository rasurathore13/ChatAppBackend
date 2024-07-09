import { Module } from '@nestjs/common';
import { TestModule } from './TestModule/Test.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User, UserSchema } from './Schemas/User.schema';

const defaultEnvPath = '.env.development';

@Module({
  imports: [TestModule,
    // ConfigModule.forRoot({
    //   envFilePath: process.env.NODE_ENV ?  `.env.${process.env.NODE_ENV}` : defaultEnvPath,
    //   isGlobal: true
    // }),
    
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {
  constructor() {
   
  }
}
