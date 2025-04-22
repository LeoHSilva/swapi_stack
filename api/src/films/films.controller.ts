import { Controller, Get, Param, Query } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  getFilmByName(@Query('search') search: string) {
    return this.filmsService.findByName(search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(Number(id));
  }
}
