import { Controller, UseGuards,Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto,CreatePerfilEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { AcademicoDto } from './dto/create-estudiante.dto';
import {CreateCursoDto} from './dto/create-curso.dto';
import {ValueNotaDto} from './dto/update-value-nota.dto'

import { JwtAuthGuard } from '../../auth/jwt-auth.guard'

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}




  @UseGuards(JwtAuthGuard)
  @Patch('nota-valor/:id')
  update(@Param('id') id: string, @Body() valueNotaDto: ValueNotaDto) {
    //console.log(id,valueNotaDto)
    return this.estudianteService.update(+id, valueNotaDto);
  }


  @UseGuards(JwtAuthGuard)
  @Delete('record/:id')
  removeRecord(@Param('id') id_record: string,@Query('ide') id_estudiante: string) {
    return this.estudianteService.removeRecord(id_record,id_estudiante);
  }

  @UseGuards(JwtAuthGuard)
  @Post('academico')
  async createAcademico(@Body() academicoDto: AcademicoDto) {
    //const { perfilEstudiante, representante , academico } = createEstudianteDto;
    return this.estudianteService.createAcademico(academicoDto);
  }
  
  




  @Get('defaultData')
  defaultData() {
    return this.estudianteService.defaultData();
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id/cedula')
  findById(@Param('id') id: string) {
    return this.estudianteService.findById(id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('getRecord/:id')
  getRecord(@Param('id') id: string) {
    return this.estudianteService.getRecord(id);
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createEstudianteDto: CreateEstudianteDto) {
    //const { perfilEstudiante, representante , academico } = createEstudianteDto;
    return this.estudianteService.create(createEstudianteDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('asignatura/:id')
  getAsignaturas(@Param('id') curso: string,@Query('id_academico') id_academico: string) {
    return this.estudianteService.getAsignaturas(+curso,+id_academico);
  }
  @UseGuards(JwtAuthGuard)
  @Post('crear-curso')
  async createCurso(@Body() createCursoDto: CreateCursoDto) {
    //const { perfilEstudiante, representante , academico } = createEstudianteDto;
    return this.estudianteService.createCurso(createCursoDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.estudianteService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string,@Query('p') perfil: string,@Query('a') academico: string,@Query('r') representante: string) {
    return this.estudianteService.findOne(id,+perfil,+academico,+representante);
  }

  //@Patch(':id')
  //update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateEstudianteDto) {
    //return this.estudianteService.update(+id, updateEstudianteDto);
  //}
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudianteService.remove(+id);
  }
}
