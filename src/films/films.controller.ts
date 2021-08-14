import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FilmsService } from './films.service';
import { Film } from '../entities/film.entity';

@Controller('films')
export class FilmsController {

    constructor(private filmService: FilmsService) {}
  
    @Get()
    findAll() {
        return this.filmService.findAll();
    }

    @Post()
    create(@Body() body) {
        return this.filmService.create(body)
    }
    
    @Put(':id')
    update(@Param('id') id, @Body('Name') Name,@Body('Description') Description) {
        return this.filmService.update(id,Name,Description)
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return this.filmService.remove(id)
    }
}
