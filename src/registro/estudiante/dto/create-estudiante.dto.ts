import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean,IsEmail, IsString, Matches, MaxLength, MinLength,IsOptional } from 'class-validator';
export class CreateEstudianteDto {
	//********************perfil***********************//
    @ApiProperty()
    @IsString()
    @MinLength(1)
    name: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string;


    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isActive: boolean;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @MinLength(1)
    cedula: string;


    @ApiProperty()
    @IsOptional()
    @IsString()
    @MinLength(1)
    cedulaEscolar: string;

    //***********************datos***********************//
    @ApiProperty()
    @IsString()
    @MinLength(1)
    origen: string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    direccion: string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    telefono: string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    curso: number;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    seccion: string;


    @ApiProperty()
    @IsString()
    @MinLength(1)
    turno: string;

    @ApiProperty()
    @IsString()
    @MinLength(1)
    medicina: boolean;
    
    @ApiProperty()
    @IsString()
    @MinLength(1)
    alergia: boolean;

    //**************************************************//

}






