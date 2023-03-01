import { Module } from '@nestjs/common';
import { HttpModule } from '@server/core/http/http.module';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  imports: [HttpModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
