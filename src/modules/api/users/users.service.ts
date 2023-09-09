import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hashPassword } from 'src/utils/bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  @InjectRepository(Users)
  private readonly userRepository: Repository<Users>;

  create(createUserDto: CreateUserDto): Promise<Users> {
    const user: Users = new Users();

    const hashedPassword = hashPassword(createUserDto.password);

    createUserDto.password = hashedPassword;

    user.email = createUserDto.email;
    user.password = hashedPassword;
    user.name = createUserDto.name;

    return this.userRepository.save(user);
  }

  findAll(): Promise<Users[]> {
    return this.userRepository.find({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findOneByEmail(email: string): Promise<Users> {
    // return `This action returns a #${email} user`;

    return this.userRepository.findOneBy({
      email: email,
    });
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
