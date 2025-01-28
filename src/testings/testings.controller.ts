import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('testings')
export class TestingsController {
  // Using findAll: indicates it may include filtering logic.
  @Get()
  findAll(@Query() query: any) {
    return [
      'This will return all testings data (potentially with filters).',
      query,
    ];
  }

  // Using getAll: suggests no filtering logic.
  @Get('all')
  getAll() {
    return 'This will return all testings data exactly as stored.';
  }

  // Using findOne: indicates searching for ajust one testing data with custom criteria.
  @Get('find/:name')
  findOne(@Param('name') name: string) {
    return `This will search and return one testing data with name: ${name}`;
  }

  // Using getOne: indicates direct retrieval by ID.
  @Get(':id')
  getOne(@Param('id') id: string) {
    return `This will return one testing data with ID: ${id}`;
  }
}
