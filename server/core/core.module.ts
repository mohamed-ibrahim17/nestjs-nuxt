import { Module } from '@nestjs/common';
import { I18nModule } from './i18n/i18n.module';
import { ConfigModule } from './config/app.config';
import { HttpModule } from './http/http.module';

@Module({
  imports: [I18nModule, ConfigModule, HttpModule],
  exports: [I18nModule, ConfigModule, HttpModule],
})
export class CoreModule {}
