import { Module } from "@nestjs/common";
import { TestController } from "./Test.controller";

@Module({
    controllers: [TestController]
})
export class TestModule
{

}