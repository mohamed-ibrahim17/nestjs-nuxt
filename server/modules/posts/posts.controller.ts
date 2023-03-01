import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from '@common/PostInterface';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('posts')
  async fetchAll(): Promise<Post[]> {
    return this.postsService.fetchAll();
  }
}
