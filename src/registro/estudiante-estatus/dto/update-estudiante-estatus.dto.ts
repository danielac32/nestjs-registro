import { PartialType } from '@nestjs/swagger';
import { CreateEstudianteEstatusDto } from './create-estudiante-estatus.dto';

export class UpdateEstudianteEstatusDto extends PartialType(CreateEstudianteEstatusDto) {}
