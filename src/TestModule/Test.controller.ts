import { Controller, Get } from "@nestjs/common";

@Controller(
    'test'
)
export class TestController
{
    constructor() {

    }


    @Get('init')
    initial() {
        return {'key':'it works'}
    }

}