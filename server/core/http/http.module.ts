import { ConfigService } from '@nestjs/config';
import { HttpModule as axios, HttpModuleOptions } from '@nestjs/axios';

export const HttpModule = axios.registerAsync({
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<HttpModuleOptions> => ({
    baseURL: configService.get<string>('http.apiBaseUrl'),
    timeout: configService.get<number>('http.httpTimeout'),
    maxRedirects: configService.get<number>('http.httpMaxRedirects'),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: configService.get<string>('auth.apiBearerToken'),
    },
  }),
});
