import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Put,
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

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Header('content-type', 'application/json')
  @Put()
  async update(@Request() req: any, @Body() createUserDTO: CreateUserDto) {
    const updatedUser: User = await this.userService.updateUser(
      req.user.sub,
      createUserDTO,
    );
    const userResponse = {
      id: updatedUser.id,
      username: updatedUser.username,
    };

    return userResponse;
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Header('content-type', 'application/json')
  @Delete()
  async delete(@Request() req: any) {
    const deletedUser: User = await this.userService.deleteUser(req.user.sub);
    const userResponse = {
      id: deletedUser.id,
      username: deletedUser.username,
    };

    return userResponse;
  }
}
