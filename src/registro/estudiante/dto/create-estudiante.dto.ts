import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, ArrayMinSize,ValidateNested,IsArray,IsInt,IsNotEmpty,IsBoolean,IsEmail, IsString, Matches, MaxLength, MinLength,IsOptional } from 'class-validator';

import { Expose,Type } from 'class-transformer';

export class CreateRepresentanteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  madre: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  cedulaM: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  telefonoM: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @IsOptional()
  emailM: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  profesionM: string;
  
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  viveConEstuanteM: boolean;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  padre: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  cedulaP: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  telefonoP: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @IsOptional()
  emailP: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  profesionP: string;
  
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  viveConEstuanteP: boolean;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  numEmergencia: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  parentesco: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  nombreRepresentante: string;
}


export class CreatePerfilEstudianteDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @IsOptional()
  email: string;
  
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive: boolean;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  cedula: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  cedulaEscolar: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  origen: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  direccion: string;
  
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
  
  }

export class MateriasAplazadasDto {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombre: string;
  
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
  @IsOptional()
  @IsInt()
  curso: number; // Optional, ID of the student (foreign key)
 
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @IsString({ each: true })
  materiasAprobadas: string[];

 
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @IsString({ each: true })
  materiasAplazadas: string[];

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






/*
{
  "perfilEstudiante": {
    "name": "string",
    "isActive": true,
    "cedula": "string",
    "cedulaEscolar": "string",
    "origen": "string",
    "direcion": "string",
    "telefono": "string",
    "medicina": true,
    "alergia": true
  },
  "representante": {
    "madre": "string",
    "cedulaM": "string",
    "telefonoM": "string",
    "profesionM": "string",
    "viveConEstuanteM": true,
    "padre": "string",
    "cedulaP": "string",
    "telefonoP": "string",
    "profesionP": "string",
    "viveConEstuanteP": true,
    "numEmergencia": "string",
    "parentesco": "string",
    "nombreRepresentante": "string"
  },
  "academico": {
    "fechaEscolarDesde": "2024-05-24T16:16:50.786Z",
    "fechaEscolarHasta": "2024-05-24T16:16:50.786Z",
    "plantelOrigen": "string",
    "repitiente": true,
    "curso": 0,//curso en el que se va a inscribir
    "pruebaVocacional": true,
    "tipoEstudiante": "string"
  }
}*/