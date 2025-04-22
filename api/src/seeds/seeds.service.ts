import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seeds } from 'src/entities/seeds.entity';
import { filmPersonSeed, filmSeed, personSeed } from './seeds.data';
import { Film } from 'src/entities/film.entity';
import { Person } from 'src/entities/person.entity';
import { FilmPerson } from 'src/entities/filmPerson.entity';

@Injectable()
export class SeedsService {
  constructor(
    @InjectRepository(Seeds)
    private readonly seedsRepository: Repository<Seeds>,
    @InjectRepository(Film)
    private readonly filmRepository: Repository<Film>,
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
    @InjectRepository(FilmPerson)
    private readonly filmPersonRepository: Repository<FilmPerson>,
  ) {}

  async insertSeeds() {
    const existingSeeds = await this.seedsRepository
      .createQueryBuilder('seeds')
      .getMany();

    if (existingSeeds.length > 0) {
      return {
        status: 'error',
        message: 'Seeds already inserted',
      };
    }

    const personQuery = this.personRepository.create(personSeed);
    const personResponse = await this.personRepository.save(personQuery);

    const filmQuery = this.filmRepository.create(filmSeed);
    const filmResponse = await this.filmRepository.save(filmQuery);

    const filmPersonQuery = this.filmPersonRepository.create(filmPersonSeed);
    const filmPersonResponse =
      await this.filmPersonRepository.save(filmPersonQuery);

    if (personResponse && filmResponse && filmPersonResponse) {
      const seedsQuery = this.seedsRepository.create({
        created_on: new Date().toISOString(),
      });
      await this.seedsRepository.save(seedsQuery);
      return {
        status: 'success',
        message: 'Seeds inserted successfully',
      };
    } else {
      return {
        status: 'error',
        message: 'Failed to insert seeds',
      };
    }
  }
}
