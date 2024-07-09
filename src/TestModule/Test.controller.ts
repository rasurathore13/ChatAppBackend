import { Controller, Get } from "@nestjs/common";
import { TestService } from "./Test.service";

@Controller(
    'test'
)
export class TestController
{
    constructor(private testService: TestService) {
    }

    @Get('init')
    initial() {
        return this.testService.getUserNameAndEmail();
    }

}