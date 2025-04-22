import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from '../entities/film.entity';
import { FilmPersonView } from 'src/entities/filmPersonView.entity';
import { StatisticsService } from 'src/statistics/statistics.service';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film) private readonly filmRepository: Repository<Film>,
    @InjectRepository(FilmPersonView)
    private readonly filmPersonView: Repository<FilmPersonView>,
    private readonly statisticsService: StatisticsService,
  ) {}

  async findByName(name: string) {
    const startTime = new Date().getTime();
    const log = await this.statisticsService.addLog(name);

    const result = await this.filmRepository
      .createQueryBuilder('films')
      .where('LOWER(films.name) like LOWER(:name)', { name: '%' + name + '%' })
      .getMany();

    const endTime = new Date().getTime();
    const timeTaken = endTime - startTime;
    await this.statisticsService.updateLog(log.id, { time_taken: timeTaken });

    return result;
  }

  async findOne(id: number) {
    const result = await this.filmRepository.findOneBy({ id });

    const characters = await this.filmPersonView
      .createQueryBuilder('filmPersonView')
      .where('filmPersonView.film_id = :id', { id })
      .getMany();

    // Extend the Film type to include characters
    const extendedResult = {
      ...result,
      characters: characters.map(({ person_id, person_name }) => ({
        id: person_id,
        name: person_name,
      })),
    };

    return extendedResult;
  }
}
