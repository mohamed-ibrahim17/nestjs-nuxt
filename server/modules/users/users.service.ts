import { User } from '@common/UserInterface';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
// import { I18nService } from 'nestjs-i18n';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    // private readonly i18n: I18nService,
    private readonly http: HttpService,
  ) {}

  async fetchAll(): Promise<User[]> {
    const { data } = await firstValueFrom(this.http.get<User[]>('/users'));
    return data;
  }

  // public findByEmail(email: string) {
  //   return this.usersRepository.findOne({ email });
  // }

  // public findById(id: number) {
  //   return this.usersRepository.findOneOrFail(id);
  // }

  // public build(user: CreateUserDto) {
  //   return this.usersRepository.create(user);
  // }

  // public create(user: CreateUserDto) {
  //   return this.usersRepository.save(user);
  // }

  // public save(user: User) {
  //   return this.usersRepository.save(user);
  // }

  // public async update(id: number, newValue: UpdateUserDto, lang = 'en') {
  //   const user = await this.usersRepository.findOneOrFail(id);
  //   if (!user.id) {
  //     const message = await this.i18n.t('user.errors.messages.does-not-exist', {
  //       lang,
  //     });
  //     throw new BadRequestException(message);
  //   }
  //   await this.usersRepository.update(id, newValue);
  //   return await this.usersRepository.findOne(id);
  // }

  // public async signUp(userDto: CreateUserDto, lang = 'en') {
  //   const { email } = userDto;
  //   let user = await this.usersRepository.findOne({ where: { email } });
  //   if (user) {
  //     const message = await this.i18n.t('user.errors.messages.already-exists', {
  //       lang,
  //     });
  //     throw new BadRequestException(message);
  //   }
  //   user = await this.usersRepository.create(userDto);
  //   return await this.usersRepository.save(user);
  // }
}
