import { Injectable, Response } from '@nestjs/common';
import { BaseResponse } from './modules/response/response.dto';

@Injectable()
export class AppService {
  getHello(): BaseResponse {
    const r: BaseResponse = {
      status: 'success',
      data: 'this is data',
      message: 'success',
    };
    return r;
  }
}
