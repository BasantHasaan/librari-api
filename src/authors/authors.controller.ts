import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './entities/author.entity';

import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
@ApiTags('authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}
  @ApiCreatedResponse({
    type: Author,
    description: 'Creates a author',
  })
  @ApiBadRequestResponse()
  @ApiBody({ type: [CreateAuthorDto] })
  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  // @Get()
  // findAll() {
  //   return this.authorsService.findAll();
  // }
  @ApiNotFoundResponse()
  @ApiOkResponse({
    type: Author,
    isArray: false,
    description: 'Returns Single Author by Id',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorsService.findOne(+id);
  }
}
