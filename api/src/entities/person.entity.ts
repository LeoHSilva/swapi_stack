import { Column, Entity } from 'typeorm';

@Entity()
export class Person {
  @Column({ type: 'int', primary: true })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  height: string;

  @Column({ type: 'varchar' })
  mass: string;

  @Column({ type: 'varchar' })
  hair_color: string;

  @Column({ type: 'varchar' })
  skin_color: string;

  @Column({ type: 'varchar' })
  eye_color: string;

  @Column({ type: 'varchar' })
  birth_year: string;

  @Column({ type: 'varchar' })
  gender: string;

  @Column({ type: 'timestamp', nullable: true })
  created_on: string | null;

  @Column({ type: 'timestamp', nullable: true })
  updated_on: string | null;
}
