import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly cfg: ConfigService;

  /**
   * createTypeOrmOptions
   */
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.cfg.get<string>('DATABASE_HOST'),
      port: this.cfg.get<number>('DATABASE_PORT'),
      database: this.cfg.get<string>('DATABASE_NAME'),
      username: this.cfg.get<string>('DATABASE_USER'),
      password: this.cfg.get<string>('DATABASE_PASSWORD'),
      entities: ['dist/**/*.entity.{ts,js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsRun: true,
      migrationsTableName: 'typeorm_migrations',
      logger: 'file',
      synchronize: false, // never use TRUE in production!
    };
  }
}
