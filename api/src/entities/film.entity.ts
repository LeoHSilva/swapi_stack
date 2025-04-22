import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({
    type: 'text',
    transformer: {
      to: (value: string) => value,
      from: (value: string) =>
        value.replace(/\\r/g, '\r').replace(/\\n/g, '\n'),
    },
  })
  description: string;

  @Column({ type: 'varchar' })
  director: string;

  @Column({ type: 'varchar' })
  producer: string;

  @Column({ type: 'varchar' })
  release_date: string;

  @Column({ type: 'timestamp', nullable: true })
  created_on: string | null;

  @Column({ type: 'timestamp', nullable: true })
  updated_on: string | null;
}
