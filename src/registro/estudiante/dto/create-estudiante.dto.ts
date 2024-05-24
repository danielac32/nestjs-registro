import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested,IsNotEmpty,IsBoolean,IsEmail, IsString, Matches, MaxLength, MinLength,IsOptional } from 'class-validator';

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



export class CreateEstudianteDto {

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreatePerfilEstudianteDto)
  perfilEstudiante: CreatePerfilEstudianteDto;
  
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateRepresentanteDto)
  representante: CreateRepresentanteDto;

}






