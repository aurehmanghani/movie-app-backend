import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from '../entities/film.entity';

@Injectable()
export class FilmsService {

    constructor(@InjectRepository(Film)
    private readonly filmRepository: Repository<Film>) {
    }
    
    findAll() : Promise<Film[]>{
        return this.filmRepository.find();
    }

    create(film: Film) : Promise<Film>{
        return this.filmRepository.save(film);
    }

    update(id: number, Movie_Name: string, Description: string) {
        return this.filmRepository.update(id, { Movie_Name: Movie_Name,Description: Description});
    }

    remove(id: number) {
        return this.filmRepository.delete(id);
    }

}
