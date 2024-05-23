import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordAcademicoService } from './record-academico.service';
import { CreateRecordAcademicoDto } from './dto/create-record-academico.dto';
import { UpdateRecordAcademicoDto } from './dto/update-record-academico.dto';

@Controller('record-academico')
export class RecordAcademicoController {
  constructor(private readonly recordAcademicoService: RecordAcademicoService) {}

  @Post()
  create(@Body() createRecordAcademicoDto: CreateRecordAcademicoDto) {
    return this.recordAcademicoService.create(createRecordAcademicoDto);
  }

  @Get()
  findAll() {
    return this.recordAcademicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordAcademicoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordAcademicoDto: UpdateRecordAcademicoDto) {
    return this.recordAcademicoService.update(+id, updateRecordAcademicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordAcademicoService.remove(+id);
  }
}
