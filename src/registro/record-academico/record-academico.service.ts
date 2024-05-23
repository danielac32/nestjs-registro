import { Injectable } from '@nestjs/common';
import { CreateRecordAcademicoDto } from './dto/create-record-academico.dto';
import { UpdateRecordAcademicoDto } from './dto/update-record-academico.dto';

@Injectable()
export class RecordAcademicoService {
  create(createRecordAcademicoDto: CreateRecordAcademicoDto) {
    return 'This action adds a new recordAcademico';
  }

  findAll() {
    return `This action returns all recordAcademico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recordAcademico`;
  }

  update(id: number, updateRecordAcademicoDto: UpdateRecordAcademicoDto) {
    return `This action updates a #${id} recordAcademico`;
  }

  remove(id: number) {
    return `This action removes a #${id} recordAcademico`;
  }
}
