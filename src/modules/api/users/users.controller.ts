import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseResponse } from 'src/modules/response/response.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
  @Inject(UsersService)
  private readonly usersService: UsersService;

  @Post()
  public async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<BaseResponse> {
    const user = await this.usersService.create(createUserDto);

    const resp: BaseResponse = {
      data: user,
      message: 'success',
      status: 'success',
    };

    return resp;
  }

  @Get()
  public async findAll(): Promise<BaseResponse> {
    const users = await this.usersService.findAll();

    const resp: BaseResponse = {
      data: users,
      message: 'success',
      status: 'success',
    };

    return resp;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get('me')
  public getProfile(@Request() req) {
    return req.user;
  }
}
