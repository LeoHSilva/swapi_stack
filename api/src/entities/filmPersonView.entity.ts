import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  expression: `
    SELECT 
      film.id AS film_id,
      person.id AS person_id,
      person.name AS person_name
    FROM 
      film
    INNER JOIN 
      film_person ON film.id = film_person.film_id
    INNER JOIN 
      person ON person.id = film_person.person_id
  `,
})
export class FilmPersonView {
  @ViewColumn()
  film_id: number;

  @ViewColumn()
  person_id: number;

  @ViewColumn()
  person_name: string;
}
