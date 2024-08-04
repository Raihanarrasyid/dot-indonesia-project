import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  hello(): string {
    return 'Hello World!';
  }

  @Post('register')
  register(@Body() createUserDTO: CreateUserDto) {
    return this.userService.createUser(createUserDTO);
  }
}
