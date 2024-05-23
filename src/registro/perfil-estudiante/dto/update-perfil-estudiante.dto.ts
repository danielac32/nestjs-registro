import { PartialType } from '@nestjs/swagger';
import { CreatePerfilEstudianteDto } from './create-perfil-estudiante.dto';

export class UpdatePerfilEstudianteDto extends PartialType(CreatePerfilEstudianteDto) {}
