import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './auth.dto';
import { isMatch } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  @Inject(UsersService)
  private readonly userService: UsersService;

  @Inject(JwtService)
  private readonly jwtService: JwtService;

  public async signIn(body: LoginDTO) {
    const user = await this.userService.findOneByEmail(body.email);

    const valid = await isMatch(body.password, user.password);

    if (!valid) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
