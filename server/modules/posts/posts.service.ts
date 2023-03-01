import { Post } from '@common/PostInterface';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
// import { I18nService } from 'nestjs-i18n';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PostsService {
  constructor(
    // private readonly i18n: I18nService,
    private readonly http: HttpService,
  ) {}

  async fetchAll(): Promise<Post[]> {
    const { data } = await firstValueFrom(this.http.get<Post[]>('/posts'));
    return data;
  }
}
