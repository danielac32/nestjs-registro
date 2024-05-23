import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { EstudianteModule } from './registro/estudiante/estudiante.module';


@Module({
  imports: [ AuthModule,ConfigModule.forRoot(), EstudianteModule],
})
export class AppModule {}
