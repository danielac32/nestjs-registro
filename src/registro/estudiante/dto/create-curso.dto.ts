import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested,IsInt,IsNumber,IsNotEmpty,IsBoolean,IsEmail, IsString, Matches, MaxLength, MinLength,IsOptional } from 'class-validator';
import { Type } from 'class-transformer';


export class CreateNotaDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  valor: number;
}


export class CreateAsignaturaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => CreateNotaDto)
  notas: CreateNotaDto[];
}


export class CreateCursoDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  num: number;
  
  @ApiProperty()
  @IsOptional()
  id_academico: number;

  @ApiProperty()
  @ValidateNested()
  @Type(() => CreateAsignaturaDto)
  asignaturas: CreateAsignaturaDto[];
}




/*
{
  "num": 1,
  "asignaturas": [
    {
      "name": "Matemáticas",
      "notas": [
        { "valor": 85 },
        { "valor": 90 },
        { "valor": 95 }
      ]
    },
    {
      "name": "Ciencias",
      "notas": [
        { "valor": 80 },
        { "valor": 85 },
        { "valor": 90 }
      ]
    },
    {
      "name": "Historia",
      "notas": [
        { "valor": 75 },
        { "valor": 80 },
        { "valor": 85 }
      ]
    },
    {
      "name": "Geografía",
      "notas": [
        { "valor": 70 },
        { "valor": 75 },
        { "valor": 80 }
      ]
    },
    {
      "name": "Literatura",
      "notas": [
        { "valor": 65 },
        { "valor": 70 },
        { "valor": 75 }
      ]
    }
  ]
}


*/