import { Injectable, HttpStatus,ConflictException,NotFoundException,ExceptionFilter,HttpException, BadRequestException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreatePerfilEstudianteDto,CreateRepresentanteDto,CreateEstudianteDto ,AcademicoDto} from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import {CreateCursoDto} from './dto/create-curso.dto';
import { PrismaService } from '../../db-connections/prisma.service';
import {
  Perfil,
  Representante,
  Academico,
  CrearEstudiante
} from './interface/estudiante.interface'
import {EstudiantesData} from './data/data-estudiante'


@Injectable()
export class EstudianteUtils {

  constructor(
    private prisma: PrismaService,
    ) {}
/*
   async getEstudianteWithProfile(id:string) {
    try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              perfil:true
            }
        });
        return Estudiante;
    } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
    }
  }


  async getEstudianteWithRecord(id:string) {
    try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              representante:true,
            }
        });
        return Estudiante;
    } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
    }
  }


  async getEstudianteWithRepresent(id:string) {
    try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              recordAcademico:{
                include:{
                  materiasAprobadas:true,
                  materiasAplazadas:true,
                }
              },
            }
        });
        return Estudiante;
    } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
    }
  }

   async getEstudianteWithAll(id:string) {
    try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              perfil:true,
              representante:true,
              recordAcademico:{
                include:{
                  materiasAprobadas:true,
                  materiasAplazadas:true,
                }
              },
              retiro:true
            }
        });
        return Estudiante;
    } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
    }
  }

  async getEstudianteWithProfileRecord(id:string) {
    try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              perfil:true,
              representante:true
              //retiro:true
            }
        });
        return Estudiante;
    } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
    }
  }

  async getEstudianteWithProfileRepresent(id:string) {
    try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              perfil:true,
              recordAcademico:{
                include:{
                  materiasAprobadas:true,
                  materiasAplazadas:true,
                }
              },
              retiro:true
            }
        });
        return Estudiante;
    } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
    }
  }

  async getEstudianteWithRecordRepresent(id:string) {
    try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              representante:true,
              recordAcademico:{
                include:{
                  materiasAprobadas:true,
                  materiasAplazadas:true,
                }
              },
              retiro:true
            }
        });
        return Estudiante;
    } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
    }
  }


async getEstudianteWithProfilRepresent(id:string) {
    try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              representante:true,
              recordAcademico:{
                include:{
                  materiasAprobadas:true,
                  materiasAplazadas:true,
                }
              },
              retiro:true
            }
        });
        return Estudiante;
    } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
    }
  }*/
  
  async all(id : string){
  	  try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              perfil:true,
              representante:true,
              recordAcademico:{
                include:{
                  materiasAprobadas:true,
                  materiasAplazadas:true,
                }
              },
              retiro:true
            }
        });
        return Estudiante;
      } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
      }
  }


  async	 academicoRepresentante(id : string){
  	  try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              representante:true,
              recordAcademico:{
                include:{
                  materiasAprobadas:true,
                  materiasAplazadas:true,
                }
              },
            }
        });
        return Estudiante;
      } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
      }
  }


  async perfilAcademico(id : string){
  	  try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              perfil:true,
              recordAcademico:{
                include:{
                  materiasAprobadas:true,
                  materiasAplazadas:true,
                }
              },
            }
        });
        return Estudiante;
      } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
      }
  }

  async representante(id : string){
  	  try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              representante:true,
            }
        });
        return Estudiante;
      } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
      }
  }


  async academico(id : string){
  	  try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              recordAcademico:{
                include:{
                  materiasAprobadas:true,
                  materiasAplazadas:true,
                }
              },
            }
        });
        return Estudiante;
      } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
      }
  }

  async perfil(id : string){
  	  try{
        const Estudiante = await this.prisma.estudianteEntity.findFirst({
            where: {
                    perfil: {
                      cedula: id,
                    },
            },
            include:{
              perfil:true
            }
        });
        return Estudiante;
      } catch (error) {
        throw new HttpException('Error findOne Estudiante', 500);
      }
  }


}
