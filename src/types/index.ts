export type Film = {
  id: string;
  name: string;
  description: string;
  characters: Array<Pick<People, 'name' | 'id'>>;
}

export type People = {
  id: string;
  name: string;
  birth_year: string;
  gender: string;
  eye_color: string;
  hair_color: string;
  height: string;
  mass: string;
  movies: Array<Pick<Film, 'name' | 'id'>>;
}
