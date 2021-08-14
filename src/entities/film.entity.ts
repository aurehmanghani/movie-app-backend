import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity('films')
export class Film extends AbstractEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Movie_Name!: string;

  @Column()
  Description!: string;
  
  @Column()
  Realease_Date!: string;
  
  @Column()
  Rating!: string;

  @Column()
  Ticket_Price!: String;

  @Column()
  Country!: string;

  @Column()
  Genre!: string;

  @Column()
  Photo!: string;

}