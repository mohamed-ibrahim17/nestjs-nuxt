const { env } = process;

export default {
  environment: 'development',
  http: {
    apiBaseUrl: env.API_BASE_URL || 'https://jsonplaceholder.typicode.com/',
    httpTimeout: env.HTTP_TIMEOUT || 10000,
    httpMaxRedirects: env.HTTP_MAX_REDIRECTS || 5,
  },
  auth: {
    apiBearerToken: env.ZID_PLATFORM_TOKEN
      ? `Berear ${env.ZID_PLATFORM_TOKEN}`
      : '',
  },
  i18n: {
    fallbackLanguage: 'ar',
    path: `${process.cwd()}/server/locales`,
  },
};
