import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This retuns all the coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return ${id} coffee`;
  }

  //   @Post()
  create(@Body() body) {
    return body;
  }

  // Example of handling HTTP status code
  //   @Post()
  //   @HttpCode(HttpStatus.GONE)
  //   create(@Body() body) {
  //     return body;
  //   }
}
