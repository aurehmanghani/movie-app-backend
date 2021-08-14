import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert,BeforeUpdate } from 'typeorm';
//import * as crypto from 'crypto';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({default: ''})
  avatar: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
