import { AvgTimeView } from './avgTimeView.entity';
import { Film } from './film.entity';
import { FilmPerson } from './filmPerson.entity';
import { FilmPersonView } from './filmPersonView.entity';
import { Log } from './log.entity';
import { Person } from './person.entity';
import { PersonFilmView } from './personFilmView.entity';
import { Seeds } from './seeds.entity';
import { TopFiveView } from './topFiveView.entity';

export const allEntities = [
  Person,
  Film,
  FilmPerson,
  Log,
  FilmPersonView,
  PersonFilmView,
  TopFiveView,
  AvgTimeView,
  Seeds,
];
