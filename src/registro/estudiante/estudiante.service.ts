import { Injectable, HttpStatus,ConflictException,NotFoundException,ExceptionFilter,HttpException, BadRequestException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreatePerfilEstudianteDto,CreateRepresentanteDto,CreateEstudianteDto ,AcademicoDto} from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import {CreateCursoDto} from './dto/create-curso.dto';
import { PrismaService } from '../../db-connections/prisma.service';


@Injectable()
export class EstudianteService {

  constructor(
    private prisma: PrismaService,
    ) {}

  
  



  async createCurso(createCursoDto:CreateCursoDto){
      try{
          

          const { id_academico, asignaturas } = createCursoDto;
          console.log(`Creando curso: ${id_academico}`);
          asignaturas.forEach(asignatura => {
            console.log(`Asignatura: ${asignatura.name}`);
            asignatura.notas.forEach(nota => {
              console.log(`Nota: ${nota.valor}`);
            });
          });
          const newCurso= await this.prisma.curso.create({
                data: {
                  //num,
                  asignatura: {
                    create: asignaturas.map(asignatura => ({
                      name: asignatura.name,
                      notas: {
                        create: asignatura.notas.map(nota => ({
                          valor: nota.valor,
                        })),
                      },
                    })),
                  },
                }
          });
          return {
            newCurso
          }
      }catch(error){

      }
  }

async create(createEstudianteDto: AcademicoDto) {
    
    try{
         console.log(createEstudianteDto)
    }catch(error){
        console.log(error)
        throw new HttpException('Error creating student', 500);
    }
  }

  /*
  async create(createEstudianteDto: CreateEstudianteDto) {
    
    try{
      const { perfilEstudiante, representante , academico } = createEstudianteDto;
      //console.log(perfilEstudiante)
      const estudianteData = {
        perfil: {
          create: perfilEstudiante,
        },
        representante: {
          create: representante,
        },
      };
      
      const {materiasAprobadas,materiasAplazadas,...academicoData}=academico;

      const res = await this.prisma.estudianteEntity.create({
        data: estudianteData
      });

      const newAcademico = await this.prisma.academico.create({
         data: {
            ...academicoData,
            id_estudiante:res.id,
            materiasAprobadas: {
              create: materiasAprobadas,
            },
            materiasAplazadas: {
              create: materiasAplazadas,
            }
          },
      });
      
      
      return {
        estudiante:res,
        record:newAcademico
      }
    }catch(error){
        console.log(error)
        throw new HttpException('Error creating student', 500);
    }
  }*/



  async findAll() {
    try{
        const all = await this.prisma.estudianteEntity.findMany({
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
        })
        

         
        //const findCurso=all.map(recordAcademico => recordAcademico.curso);
        


        return {
          all
        }
    }catch(error){
      console.log(error)
        throw new HttpException('Error all estudiante', 500);
    }
  }

  async findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }
  
  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  async remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
