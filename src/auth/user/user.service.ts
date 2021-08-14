import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../../entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                email: email,
            }
        });
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                id: id,
            }
        });
    }

    async create(user: User): Promise<User> {
        const entity = Object.assign(new User(), user);
        return await this.userRepository.save(entity);
    }
    
}