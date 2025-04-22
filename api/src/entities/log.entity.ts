import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  search: string;

  @Column({ type: 'int', default: () => '0' })
  time_taken: number;

  @Column({ type: 'timestamp', nullable: true })
  created_on: string;

  @Column({ type: 'timestamp', nullable: true })
  updated_on: string;
}
