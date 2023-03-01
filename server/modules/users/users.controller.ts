import { Controller, Get } from '@nestjs/common';
import { User } from '@common/UserInterface';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')
  async fetchAll(): Promise<User[]> {
    return this.usersService.fetchAll();
  }
}
