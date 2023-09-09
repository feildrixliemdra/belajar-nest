import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { BaseResponse } from 'src/modules/response/response.dto';
import { LoginDTO } from './auth.dto';
import { AuthGuard, Public } from './auth.guard';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;

  @Public()
  @Post('login')
  @HttpCode(200)
  public async signIn(@Body() body: LoginDTO) {
    const token = await this.authService.signIn(body);
    const resp: BaseResponse = {
      data: token,
      status: 'success',
      message: 'success',
    };

    return resp;
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
