import { PartialType } from '@nestjs/swagger';
import { CreateRecordAcademicoDto } from './create-record-academico.dto';

export class UpdateRecordAcademicoDto extends PartialType(CreateRecordAcademicoDto) {}
