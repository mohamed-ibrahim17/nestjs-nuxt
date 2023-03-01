import { ConfigService } from '@nestjs/config';
import {
  I18nModule as I18n,
  I18nJsonParser,
  I18nOptionsWithoutResolvers,
  QueryResolver,
  CookieResolver,
} from 'nestjs-i18n';

export const I18nModule = I18n.forRootAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService): I18nOptionsWithoutResolvers => ({
    fallbackLanguage: configService.get<string>('i18n.fallbackLanguage'),
    parserOptions: {
      path: configService.get<string>('i18n.path'),
      watch: process.env.NODE_ENV === 'development',
    },
  }),
  parser: I18nJsonParser,
  resolvers: [
    { use: QueryResolver, options: ['lang', 'locale', 'l'] },
    new CookieResolver(['i18n_redirected']),
  ],
});
