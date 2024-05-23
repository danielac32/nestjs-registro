import { Injectable } from '@nestjs/common';
import { CreateEstudianteEstatusDto } from './dto/create-estudiante-estatus.dto';
import { UpdateEstudianteEstatusDto } from './dto/update-estudiante-estatus.dto';

@Injectable()
export class EstudianteEstatusService {
  create(createEstudianteEstatusDto: CreateEstudianteEstatusDto) {
    return 'This action adds a new estudianteEstatus';
  }

  findAll() {
    return `This action returns all estudianteEstatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estudianteEstatus`;
  }

  update(id: number, updateEstudianteEstatusDto: UpdateEstudianteEstatusDto) {
    return `This action updates a #${id} estudianteEstatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudianteEstatus`;
  }
}
