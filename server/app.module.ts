import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './modules/users/users.module';
import { CoreModule } from './core/core.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [CoreModule, UsersModule, PostsModule],
  controllers: [AppController],
})
export class AppModule {}
