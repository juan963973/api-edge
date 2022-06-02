import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {hash, compare} from 'bcrypt'
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) 
    private userRepository: Repository<User>,
    private jwtService: JwtService
  ){}

  async register(userObject: RegisterAuthDto): Promise<User> {
    const {password} = userObject
    const plainToHash = await hash(password, 10)
    userObject = {...userObject, password: plainToHash }
    return await this.userRepository.save(userObject);
  }

  async login(userObjectLogin: LoginAuthDto){
    const {email, password} = userObjectLogin
    const findUser = await this.userRepository.findOne({ where: { email } });
    if(!findUser) throw new HttpException('USER_NOT_FOUND', 404)

    const checkPassword = await compare(password, findUser.password)

    if(!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403)

    const payload = {id: findUser.id, name: findUser.name}
    const token = this.jwtService.sign(payload)

    const data = {
      user: findUser,
      token,
    }

    return data
  }
}