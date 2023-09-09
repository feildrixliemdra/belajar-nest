import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Response,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Authors } from './authors.entity';
import { CreateAuthorDTO } from './authors.dto';
import { BaseResponse } from 'src/modules/response/response.dto';

@Controller('authors')
export class AuthorsController {
  @Inject(AuthorsService)
  private readonly authorService: AuthorsService;

  @Get()
  /**
   * getAll
   */
  public async getAll(): Promise<BaseResponse> {
    const author = await this.authorService.getAll();

    const resp: BaseResponse = {
      data: author,
      message: 'success',
      status: 'success',
    };

    return resp;
  }

  @Get('id')
  public async getByID(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<BaseResponse> {
    const author = await this.authorService.getByID(id).catch((error) => {
      const resp: BaseResponse = {
        data: null,
        message: 'error: ' + error,
        status: 'failed',
      };
    });

    const resp: BaseResponse = {
      data: author,
      message: 'success',
      status: 'success',
    };

    return resp;
  }

  /**
   * create
   */
  @Post()
  public create(@Body() body: CreateAuthorDTO): Promise<Authors> {
    return this.authorService.createOne(body);
  }
}
