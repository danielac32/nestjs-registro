import { Module } from '@nestjs/common';
import { EstudianteEstatusService } from './estudiante-estatus.service';
import { EstudianteEstatusController } from './estudiante-estatus.controller';

@Module({
  controllers: [EstudianteEstatusController],
  providers: [EstudianteEstatusService],
})
export class EstudianteEstatusModule {}
