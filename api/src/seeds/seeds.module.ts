import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { SeedsController } from './seeds.controller';
import { Seeds } from 'src/entities/seeds.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from 'src/entities/film.entity';
import { Person } from 'src/entities/person.entity';
import { FilmPerson } from 'src/entities/filmPerson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seeds, Film, Person, FilmPerson])],
  controllers: [SeedsController],
  providers: [SeedsService],
})
export class SeedsModule {}
