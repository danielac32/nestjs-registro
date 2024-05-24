import { Injectable, HttpStatus,ConflictException,NotFoundException,ExceptionFilter,HttpException, BadRequestException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreatePerfilEstudianteDto,CreateRepresentanteDto,CreateEstudianteDto ,AcademicoDto} from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { PrismaService } from '../../db-connections/prisma.service';


@Injectable()
export class EstudianteService {

  constructor(
    private prisma: PrismaService,
    ) {}


  async create(createEstudianteDto: CreateEstudianteDto) {
    
    try{
      const { perfilEstudiante, representante , academicoDto } = createEstudianteDto;
      const estudianteData = {
        perfil: {
          create: perfilEstudiante,
        },
        representante: {
          create: representante,
        },
      };


      const {materiasAprobadas,materiasAplazadas,...data}=academicoDto;
      const res = await this.prisma.estudianteEntity.create({
        data: {
            ...estudianteData,
            recordAcademico: {
              create: {...data}, // Pass the entire academico object
            },
        }
      });
      
     
      

      return {
        status:"ok"
      }
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
                //materiasAprobadas:true,
               // materiasAplazadas:true,
                //curso: true,
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
