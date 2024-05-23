import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerfilEstudianteService } from './perfil-estudiante.service';
import { CreatePerfilEstudianteDto } from './dto/create-perfil-estudiante.dto';
import { UpdatePerfilEstudianteDto } from './dto/update-perfil-estudiante.dto';

@Controller('perfil-estudiante')
export class PerfilEstudianteController {
  constructor(private readonly perfilEstudianteService: PerfilEstudianteService) {}

  @Post()
  create(@Body() createPerfilEstudianteDto: CreatePerfilEstudianteDto) {
    return this.perfilEstudianteService.create(createPerfilEstudianteDto);
  }

  @Get()
  findAll() {
    return this.perfilEstudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfilEstudianteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerfilEstudianteDto: UpdatePerfilEstudianteDto) {
    return this.perfilEstudianteService.update(+id, updatePerfilEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilEstudianteService.remove(+id);
  }
}
