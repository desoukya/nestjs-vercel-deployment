import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

class SayHelloDto {
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello!';
  }

  @Post()
  sayHello(@Body() dto: SayHelloDto) {
    return `Hello ${dto.name}`;
  }
}
