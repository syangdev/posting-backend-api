import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private logger: Logger) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/test")
  test(): string {
    const testString = 'testing ... '+ Date.now();
    this.logger.log(testString);
    return testString;
  }
}
