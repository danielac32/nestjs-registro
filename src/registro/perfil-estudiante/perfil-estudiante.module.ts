import { Module } from '@nestjs/common';
import { PerfilEstudianteService } from './perfil-estudiante.service';
import { PerfilEstudianteController } from './perfil-estudiante.controller';

@Module({
  controllers: [PerfilEstudianteController],
  providers: [PerfilEstudianteService],
})
export class PerfilEstudianteModule {}
