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
import {EstudianteUtils} from './estudiante.utils'


@Injectable()
export class EstudianteService {

  constructor(
    private prisma: PrismaService,
    private utils: EstudianteUtils
    ) {}

  
  

  async defaultData(){
    try{
        for (const estudiante of EstudiantesData) {
             const { perfilEstudiante, representante, academico } = estudiante;
             const createdPerfil = await this.prisma.perfilEstudiante.create({
                data:perfilEstudiante
             });

            const createdRepresentante = await this.prisma.representante.create({
              data: {
                ...representante,
                estudiante: {
                  create: [],
                },
              },
            });
            const {materiasAprobadas,materiasAplazadas,...academicoData}=academico;
            const createdAcademico = await this.prisma.academico.create({
              data: {
                ...academicoData,
                materiasAprobadas: {
                  create: materiasAprobadas.map((materia) => ({
                    nombre: materia,
                  })),
                },
                materiasAplazadas: {
                  create: materiasAplazadas.map((materia) => ({
                    nombre: materia,
                  })),
                },
              },
            });

            const createdEstudiante = await this.prisma.estudianteEntity.create({
            data: {
                id_perfil: createdPerfil.id,
                id_representante: createdRepresentante.id,
                recordAcademico: {
                  connect: { id: createdAcademico.id },
                },
              },
            });
        }
        return {
          status:"ok"
        }
    }catch(error){
          console.log(error)
        throw new HttpException('Error creating dataDefault', 500);
    }
  }

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
        console.log(error)
        throw new HttpException('Error creating curso', 500);
      }
  }


  async create(createEstudianteDto: CreateEstudianteDto) {
    
    try{
      const { perfilEstudiante, representante , academico } = createEstudianteDto;
      //console.log(perfilEstudiante)
      const createdPerfil = await this.prisma.perfilEstudiante.create({
        data: {
          ...perfilEstudiante
        },
      });

      const createdRepresentante = await this.prisma.representante.create({
        data: {
          ...representante,
          estudiante: {
            create: [],
          },
        },
      });

      const {materiasAprobadas,materiasAplazadas,...academicoData}=academico;
      const createdAcademico = await this.prisma.academico.create({
        data: {
          ...academicoData,
          materiasAprobadas: {
            create: materiasAprobadas.map((materia) => ({
              nombre: materia,
            })),
          },
          materiasAplazadas: {
            create: materiasAplazadas.map((materia) => ({
              nombre: materia,
            })),
          },
        },
      });

      const createdEstudiante = await this.prisma.estudianteEntity.create({
      data: {
          id_perfil: createdPerfil.id,
          id_representante: createdRepresentante.id,
          recordAcademico: {
            connect: { id: createdAcademico.id },
          },
        },
      });

      return createdEstudiante;


    }catch(error){
        console.log(error)
        throw new HttpException('Error creating student', 500);
    }
  }



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
        return {
          all
        }
    }catch(error){
      console.log(error)
        throw new HttpException('Error all estudiante', 500);
    }
  }



  async findById(id: string){
       const response = await this.utils.perfil(id);  
       if(response)return{
           response
       }
       if(!response){
           throw new HttpException('Entity not found', 404);
       } 
  }


  async findOne(id: string,perfil:number,academico:number,representante:number) {
        let response:null | any;
 
        if (perfil && !academico && !representante) {
          // Solo incluye el perfil
           response = await this.utils.perfil(id);
        } else if (!perfil && academico && !representante) {
          // Solo incluye el academico
           response = await this.utils.academico(id);
        } else if (!perfil && !academico && representante) {
          // Solo incluye el representante
           response = await this.utils.representante(id);
        } else if (perfil && academico && !representante) {
          // Incluye el perfil y el academico
          response = await this.utils.perfilAcademico(id);
        } else if (perfil && !academico && representante) {
          // Incluye el perfil y el representante
          response = await this.utils.perfilRepresentante(id);
        } else if (!perfil && academico && representante) {
          // Incluye el academico y el representante
          response = await this.utils.academicoRepresentante(id);
        } else if (perfil && academico && representante) {
          // Incluye el perfil, el academico y el representante
          response = await this.utils.all(id);
        } else {
          // Ninguna opción seleccionada
          response = await this.utils.perfil(id);
        }
       
        if(response)return{
           response,
           mode:[perfil , academico , representante]
        }
        
        if(!response){
              throw new HttpException('Entity not found', 404);
        }
 
        throw new HttpException('Error findOne', 500);
    
  }
  
  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  async remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
