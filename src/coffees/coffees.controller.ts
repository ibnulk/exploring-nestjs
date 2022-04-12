import { Controller, Get, Param } from '@nestjs/common';

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
}
