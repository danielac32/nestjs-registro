import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RepresentanteModule } from './registro/representante/representante.module';
import { RecordAcademicoModule } from './registro/record-academico/record-academico.module';
import { PerfilEstudianteModule } from './registro/perfil-estudiante/perfil-estudiante.module';
import { EstudianteModule } from './registro/estudiante/estudiante.module';


@Module({
  imports: [ AuthModule,ConfigModule.forRoot(), RepresentanteModule, RecordAcademicoModule, PerfilEstudianteModule, EstudianteModule],
})
export class AppModule {}
