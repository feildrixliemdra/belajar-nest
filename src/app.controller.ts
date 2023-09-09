import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BaseResponse } from './modules/response/response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): BaseResponse {
    return this.appService.getHello();
  }
}
