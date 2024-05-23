import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RepresentanteService } from './representante.service';
import { CreateRepresentanteDto } from './dto/create-representante.dto';
import { UpdateRepresentanteDto } from './dto/update-representante.dto';

@Controller('representante')
export class RepresentanteController {
  constructor(private readonly representanteService: RepresentanteService) {}

  @Post()
  create(@Body() createRepresentanteDto: CreateRepresentanteDto) {
    return this.representanteService.create(createRepresentanteDto);
  }

  @Get()
  findAll() {
    return this.representanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.representanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepresentanteDto: UpdateRepresentanteDto) {
    return this.representanteService.update(+id, updateRepresentanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.representanteService.remove(+id);
  }
}
