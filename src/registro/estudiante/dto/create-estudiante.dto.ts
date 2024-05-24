import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested,IsInt,IsNotEmpty,IsBoolean,IsEmail, IsString, Matches, MaxLength, MinLength,IsOptional } from 'class-validator';

import { Type } from 'class-transformer';

export class CreateRepresentanteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  madre: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cedulaM: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  telefonoM: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  emailM: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  profesionM: string;
  
  @ApiProperty()
  @IsBoolean()
  viveConEstuanteM: boolean;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  padre: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cedulaP: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  telefonoP: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  emailP: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  profesionP: string;
  
  @ApiProperty()
  @IsBoolean()
  viveConEstuanteP: boolean;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  numEmergencia: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  parentesco: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombreRepresentante: string;
}


export class CreatePerfilEstudianteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsEmail()
  email: string;
  
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive: boolean;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cedula: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cedulaEscolar: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  origen: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  direcion: string;
  
  @ApiProperty()
  @IsString()
  @IsOptional()
  telefono: string;
  
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  medicina: boolean;
  
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  alergia: boolean;
}


export class MateriasAprobadasDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;
  
  @IsOptional()
  @IsInt()
  academicoId?: number; // Optional if not creating a new approved subject within an academic record
}

export class MateriasAplazadasDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;
  
  @IsOptional()
  @IsInt()
  academicoId?: number; // Optional if not creating a new failed subject within an academic record
}

export class AcademicoDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fechaEscolarDesde: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fechaEscolarHasta: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  plantelOrigen: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  repitiente: boolean; // Optional, defaults to false

 
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MateriasAprobadasDto)
  materiasAprobadas: MateriasAprobadasDto[]=[];


  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MateriasAplazadasDto)
  materiasAplazadas: MateriasAplazadasDto[]=[];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  pruebaVocacional: boolean; // Optional
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  tipoEstudiante: string;
 
}


export class RetiroDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  representante: string; // Name of the representative

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  motivo: string; // Reason for withdrawal

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  responsable: string; // Name of the responsible person

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cedulaResponsable: string; // Responsible person's ID

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  cargoResponsable: string; // Responsible person's position

  @IsOptional()
  @IsInt()
  estudianteId?: number; // Optional, ID of the student (foreign key)
}


export class CreateEstudianteDto {

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreatePerfilEstudianteDto)
  perfilEstudiante: CreatePerfilEstudianteDto;
  
  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateRepresentanteDto)
  representante: CreateRepresentanteDto;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @ValidateNested()
  @Type(() => AcademicoDto)
  academico: AcademicoDto;
  
  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => RetiroDto)
  retiro: RetiroDto;
}






