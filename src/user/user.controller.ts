import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  hello(): string {
    return 'Hello World!';
  }

  @HttpCode(HttpStatus.OK)
  @Header('content-type', 'application/json')
  @Post('register')
  async register(@Body() createUserDTO: CreateUserDto) {
    const registeredUser: User =
      await this.userService.createUser(createUserDTO);
    const userResponse = {
      id: registeredUser.id,
      username: registeredUser.username,
    };

    return userResponse;
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Header('content-type', 'application/json')
  @Get('profile')
  async profile(@Request() req: any) {
    const user = {
      id: req.user.sub,
      username: req.user.username,
    };
    return user;
  }
}
