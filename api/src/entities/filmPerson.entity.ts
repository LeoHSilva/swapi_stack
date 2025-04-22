import { Column, Entity, Index } from 'typeorm';

@Entity()
@Index(['film_id', 'person_id'], { unique: true })
export class FilmPerson {
  @Column({ type: 'int', primary: true })
  film_id: number;

  @Column({ type: 'int', primary: true })
  person_id: number;
}
