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
import {ValueNotaDto} from './dto/update-value-nota.dto'


@Injectable()
export class EstudianteService {

  constructor(
    private prisma: PrismaService,
    private utils: EstudianteUtils
    ) {}

  


  async getRecord(id: string){
       const response = await this.utils.academico(id); 
       if(response)return{
           response
       }
       if(!response){
           throw new HttpException('Entity not found', 404);
       } 
  }




  async removeRecord(id_record:string,id_estudiante:string){
        //console.log(id_record,id_estudiante)
      try {
          // Verifica si el registro académico pertenece al estudiante
          const record = await this.prisma.academico.findFirst({
            where: {
              id: +id_record,
              id_estudiante: +id_estudiante
            }
          });

          if (!record) {
            console.error('El registro académico no pertenece al estudiante especificado.');
            throw new HttpException('El registro académico no pertenece al estudiante especificado', 500);
          }
           

           
          // Eliminar los registros dependientes primero
          await this.prisma.materiasAprobadas.deleteMany({
            where: {
              academicoId: +id_record
            }
          });

          await this.prisma.materiasAplazadas.deleteMany({
            where: {
              academicoId: +id_record
            }
          });

          // Eliminar el registro académico
          const recordDtelete=await this.prisma.academico.delete({
            where: {
              id: +id_record
            }
          });
          
          return {
              recordDtelete
          }
          console.log(`Registro académico con id ${id_record} eliminado exitosamente.`);
        } catch (error) {
          console.error('Error al eliminar el registro académico:', error);
          throw new HttpException('Error al eliminar el registro académico', 500);
        } 
      }
  async createAcademico(academicoDto: AcademicoDto){
      try{

            const {id_estudiante,materiasAprobadas,materiasAplazadas,...academicoData}=academicoDto;
            const createdAcademico = await this.prisma.academico.create({
            data: {
                ...academicoData,
                id_estudiante: id_estudiante,
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
            return {
              createdAcademico
            }
      }catch(error){
        console.log(error)
        throw new HttpException('Error createAcademico', 500);
      }
  }


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
  


  async getAsignaturas(num: number, id_academico: number){
      const academico = await this.prisma.academico.findUnique({
        where: {
          id: id_academico
        },
      });

      if (!academico) {
        throw new Error(`No se encontró un académico con el id ${id_academico}`);
      }
      //academico.curso
      const materias = await this.prisma.asignatura.findMany({
           where: {
              cursoId: academico.curso,
             // id: academico.curso // Asegurando que el curso pertenece al académico encontrado
           },
           include: {
              notas: true
           }
      })
      return {
        materias
      }

  }
  async getCurso(num: number, id_academico: number){
      const academico = await this.prisma.academico.findUnique({
        where: {
          id: id_academico
        },
      });

      if (!academico) {
        throw new Error(`No se encontró un académico con el id ${id_academico}`);
      }

      // Luego, buscamos el curso con el num especificado
      const curso = await this.prisma.curso.findFirst({
        where: {
          num: num,
          id: academico.curso // Asegurando que el curso pertenece al académico encontrado
        },
        include: {
          asignatura: {
            include: {
              notas: true
            }
          }
        }
      });
      return{
        curso
      }
  }


  async getCursoCheck(num: number, id_academico: number){
      const academico = await this.prisma.academico.findUnique({
        where: {
          id: id_academico
        },
      });

      if (!academico) {
        throw new Error(`No se encontró un académico con el id ${id_academico}`);
      }

      // Luego, buscamos el curso con el num especificado
      const curso = await this.prisma.curso.findFirst({
        where: {
          num: num,
          id: academico.curso // Asegurando que el curso pertenece al académico encontrado
        },
        include: {
          asignatura: {
            include: {
              notas: true
            }
          }
        }
      });
      return curso;
  }

  async createCurso(createCursoDto:CreateCursoDto){
 

          const { num,id_academico, asignaturas } = createCursoDto;

         /* console.log(`Creando curso: ${id_academico}`);
          asignaturas.forEach(asignatura => {
            console.log(`Asignatura: ${asignatura.name}`);
            asignatura.notas.forEach(nota => {
              console.log(`Nota: ${nota.valor}`);
            });
          });*/

          const check= await this.getCursoCheck(num,id_academico);
          if(check){
              throw new HttpException('Este record ya tiene asignaturas', 500);
          }

          const newCurso= await this.prisma.curso.create({
                data: {
                  num,
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
          
          /*// Actualizar el campo curso en el modelo Academico
          await this.prisma.academico.update({
            where: { id: id_academico },
            data: { curso: num }
          });*/

          return { newCurso}
          
       
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
  
  async update(id: number, valueNotaDto: ValueNotaDto) {
        const {asignaturaId,valor}=valueNotaDto;
  
        const updated = await this.prisma.notas.update({
            where: {
               id,
               asignaturaId
            },
            data:{
              valor
            }
        });
        
        return{
            updated
        }
  }

  async remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
