import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  expression: `
    SELECT 
      person.id AS person_id,
      film.id AS film_id,
      film.name AS film_name
    FROM 
      person
    INNER JOIN 
      film_person ON person.id = film_person.person_id
    INNER JOIN 
      film ON film.id = film_person.film_id
  `,
})
export class PersonFilmView {
  @ViewColumn()
  person_id: number;

  @ViewColumn()
  film_id: number;

  @ViewColumn()
  film_name: string;
}
