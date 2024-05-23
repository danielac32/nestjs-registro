import { Module } from '@nestjs/common';
import { RecordAcademicoService } from './record-academico.service';
import { RecordAcademicoController } from './record-academico.controller';

@Module({
  controllers: [RecordAcademicoController],
  providers: [RecordAcademicoService],
})
export class RecordAcademicoModule {}
