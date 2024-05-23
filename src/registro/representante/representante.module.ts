import { Module } from '@nestjs/common';
import { RepresentanteService } from './representante.service';
import { RepresentanteController } from './representante.controller';

@Module({
  controllers: [RepresentanteController],
  providers: [RepresentanteService],
})
export class RepresentanteModule {}
