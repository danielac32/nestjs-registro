import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested,IsInt,IsNumber,IsNotEmpty,IsBoolean,IsEmail, IsString, Matches, MaxLength, MinLength,IsOptional } from 'class-validator';
import { Type } from 'class-transformer';


export class ValueNotaDto {
 @IsNumber()
  valor: number;

  @IsNumber()
  asignaturaId: number;
}

