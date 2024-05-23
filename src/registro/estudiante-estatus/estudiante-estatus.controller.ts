import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudianteEstatusService } from './estudiante-estatus.service';
import { CreateEstudianteEstatusDto } from './dto/create-estudiante-estatus.dto';
import { UpdateEstudianteEstatusDto } from './dto/update-estudiante-estatus.dto';

@Controller('estudiante-estatus')
export class EstudianteEstatusController {
  constructor(private readonly estudianteEstatusService: EstudianteEstatusService) {}

  @Post()
  create(@Body() createEstudianteEstatusDto: CreateEstudianteEstatusDto) {
    return this.estudianteEstatusService.create(createEstudianteEstatusDto);
  }

  @Get()
  findAll() {
    return this.estudianteEstatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudianteEstatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudianteEstatusDto: UpdateEstudianteEstatusDto) {
    return this.estudianteEstatusService.update(+id, updateEstudianteEstatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudianteEstatusService.remove(+id);
  }
}
