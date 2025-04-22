import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../entities/person.entity';
import { PersonFilmView } from 'src/entities/personFilmView.entity';
import { StatisticsService } from 'src/statistics/statistics.service';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(Person)
    private readonly peopleRepository: Repository<Person>,
    @InjectRepository(PersonFilmView)
    private readonly personFilmView: Repository<PersonFilmView>,
    private readonly statisticsService: StatisticsService,
  ) {}

  async findByName(name: string) {
    const startTime = new Date().getTime();
    const log = await this.statisticsService.addLog(name);

    const result = await this.peopleRepository
      .createQueryBuilder('people')
      .where('LOWER(people.name) like LOWER(:name)', { name: '%' + name + '%' })
      .getMany();

    const endTime = new Date().getTime();
    const timeTaken = endTime - startTime;
    await this.statisticsService.updateLog(log.id, { time_taken: timeTaken });

    return result;
  }

  async findOne(id: number) {
    const result = await this.peopleRepository.findOneBy({ id });

    const movies = await this.personFilmView
      .createQueryBuilder('personFilmView')
      .where('personFilmView.person_id = :id', { id })
      .getMany();

    // Extend the Person type to include movies
    const extendedResult = {
      ...result,
      movies: movies.map(({ film_id, film_name }) => ({
        id: film_id,
        name: film_name,
      })),
    };

    return extendedResult;
  }
}
