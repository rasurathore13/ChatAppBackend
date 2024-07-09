import { Module } from "@nestjs/common";
import { TestController } from "./Test.controller";
import { TestService } from "./Test.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/Schemas/User.schema";
import { ConfigModule, ConfigService } from "@nestjs/config";
const defaultEnvPath = '.env.development';
@Module({
    imports:[
        MongooseModule.forRootAsync(
            {
              imports: [ConfigModule.forRoot({
                  envFilePath: process.env.NODE_ENV ?  `.env.${process.env.NODE_ENV}` : defaultEnvPath,
                  isGlobal: true
                }),],
              useFactory: async (configService: ConfigService) => ({
                  uri: 'mongodb://localhost:27017/test_db'//configService.get('MONGODB_URI')
              }),
              inject: [ConfigService],
            }
            //configService.get('MONGODB_URI')
            ),
        MongooseModule.forFeature([
          {name: 'User', schema: UserSchema},
        ]),
    ],
    controllers: [TestController],
    providers: [TestService],
    
})
export class TestModule
{

}