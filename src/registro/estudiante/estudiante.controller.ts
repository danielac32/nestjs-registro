import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto,CreatePerfilEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { AcademicoDto } from './dto/create-estudiante.dto';
import {CreateCursoDto} from './dto/create-curso.dto';



@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}


  @Get('defaultData')
  defaultData() {
    return this.estudianteService.defaultData();
  }


  @Post()
  async create(@Body() createEstudianteDto: CreateEstudianteDto) {
    //const { perfilEstudiante, representante , academico } = createEstudianteDto;
    return this.estudianteService.create(createEstudianteDto);
  }
  

  
  @Post('crear-curso')
  async createCurso(@Body() createCursoDto: CreateCursoDto) {
    //const { perfilEstudiante, representante , academico } = createEstudianteDto;
    return this.estudianteService.createCurso(createCursoDto);
  }

  @Get()
  findAll() {
    return this.estudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string,@Query('p') perfil: boolean,@Query('a') academico: boolean,@Query('r') representante: boolean) {
    return this.estudianteService.findOne(id,perfil,academico,representante);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateEstudianteDto) {
    return this.estudianteService.update(+id, updateEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudianteService.remove(+id);
  }
}
