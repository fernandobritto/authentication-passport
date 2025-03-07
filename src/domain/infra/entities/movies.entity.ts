import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('movies')
export class MoviesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  year: number

  @Column()
  title: string

  @Column()
  studios: string

  @Column()
  producers: string

  @Column()
  winner: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
