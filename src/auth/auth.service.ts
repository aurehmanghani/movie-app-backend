import { Injectable, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from  '@nestjs/jwt';
import { UserService } from  './user/user.service';
import { User } from  '../entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    private async validate(userData: User): Promise<User> {

        const user = await this.userService.findByEmail(userData.email);
        console.log(user);
        if (!(await user.validatePassword(userData.password))) {
            throw new UnauthorizedException();
        }

        return user;
        //return await this.userService.findByEmail(userData.email);
    }

    public async login(user: User): Promise< any | { status: number }>{

        return this.validate(user).then((userData)=>{
          if(!userData){
            return { status: 404 };
          }
          let payload = `${userData.name}${userData.id}`;
          const accessToken = this.jwtService.sign(payload);

          return {
             expires_in: 3600,
             access_token: accessToken,
             user_id: payload,
             status: 200
          };

        });
    }

    public async register(user: User): Promise<any>{

        // const hashedPassword = await bcrypt.hash(user.password, 10);
        // try {
        // const createdUser = await this.userService.create({
        //     ...user,
        //     password: hashedPassword
        // });
        // createdUser.password = undefined;
        // return createdUser;
        // } catch (error) {
        // // if (error?.code === PostgresErrorCode.UniqueViolation) {
        // //     throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
        // // }
        // throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
        // }
        return this.userService.create(user)
    } 
}
