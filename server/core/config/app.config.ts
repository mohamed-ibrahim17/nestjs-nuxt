import { ConfigModule as Config } from '@nestjs/config';
import developmentConfig from './development';
import productionConfig from './production';

const CONFIG = {
  development: () => developmentConfig,
  production: () => productionConfig,
};

const ENV = process.env.NODE_ENV || 'development';

export const ConfigModule = Config.forRoot({
  ignoreEnvFile: ENV === 'production',
  load: [CONFIG[ENV]],
  isGlobal: true,
  expandVariables: true,
});
