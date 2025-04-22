import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleController } from './people.controller';
import { Person } from '../entities/person.entity';
import { PersonFilmView } from 'src/entities/personFilmView.entity';
import { Log } from 'src/entities/log.entity';
import { StatisticsModule } from 'src/statistics/statistics.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Person, PersonFilmView, Log]),
    StatisticsModule,
  ],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
