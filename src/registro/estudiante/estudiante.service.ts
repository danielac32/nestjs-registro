import { Injectable, HttpStatus,ConflictException,NotFoundException,ExceptionFilter,HttpException, BadRequestException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreatePerfilEstudianteDto,CreateRepresentanteDto,CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { PrismaService } from '../../db-connections/prisma.service';


@Injectable()
export class EstudianteService {

  constructor(
    private prisma: PrismaService,
    ) {}


  async create(createPerfilEstudianteDto: CreatePerfilEstudianteDto, createRepresentanteDto: CreateRepresentanteDto) {
    try{
        const estudianteData = {
          perfil: {
            create: createPerfilEstudianteDto,
          },
          representante: {
            create: createRepresentanteDto,
          },
        };

        return this.prisma.estudianteEntity.create({
          data: estudianteData,
        });
    }catch(error){
        throw new HttpException('Error creating student', 500);
    }
  }

  async findAll() {
    return `This action returns all estudiante`;
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
