import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { PrismaService } from '../../db-connections/prisma.service';
import {EstudianteUtils} from './estudiante.utils'
@Module({
  controllers: [EstudianteController],
  providers: [EstudianteService,PrismaService,EstudianteUtils],
})
export class EstudianteModule {}
