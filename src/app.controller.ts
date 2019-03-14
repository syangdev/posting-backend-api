import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private logger: Logger) {}

  @Get()
  getHello(): string {
    this.logger.log(`[${Date.now()}] getHello`);
    return this.appService.getHello();
  }

  @Get("/test")
  test(): string {
    const testString = `[${Date.now()}] test`;
    this.logger.log(testString);
    return testString;
  }

  @Get("/api")
  api(): string {
    const testString = `[${Date.now()}] api`;
    this.logger.log(testString);
    return testString;
  }
}
