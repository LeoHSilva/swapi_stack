import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsController } from './films.controller';
import { Film } from '../entities/film.entity';
import { FilmPersonView } from 'src/entities/filmPersonView.entity';
import { StatisticsModule } from 'src/statistics/statistics.module';

@Module({
  imports: [TypeOrmModule.forFeature([Film, FilmPersonView]), StatisticsModule],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
