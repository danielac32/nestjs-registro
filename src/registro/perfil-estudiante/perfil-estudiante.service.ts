import { Injectable } from '@nestjs/common';
import { CreatePerfilEstudianteDto } from './dto/create-perfil-estudiante.dto';
import { UpdatePerfilEstudianteDto } from './dto/update-perfil-estudiante.dto';

@Injectable()
export class PerfilEstudianteService {
  create(createPerfilEstudianteDto: CreatePerfilEstudianteDto) {
    return 'This action adds a new perfilEstudiante';
  }

  findAll() {
    return `This action returns all perfilEstudiante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} perfilEstudiante`;
  }

  update(id: number, updatePerfilEstudianteDto: UpdatePerfilEstudianteDto) {
    return `This action updates a #${id} perfilEstudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} perfilEstudiante`;
  }
}
