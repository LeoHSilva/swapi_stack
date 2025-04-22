import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seeds {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', nullable: true })
  created_on: string | null;

  @Column({ type: 'timestamp', nullable: true })
  updated_on: string | null;
}
