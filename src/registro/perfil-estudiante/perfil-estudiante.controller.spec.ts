import { Test, TestingModule } from '@nestjs/testing';
import { PerfilEstudianteController } from './perfil-estudiante.controller';
import { PerfilEstudianteService } from './perfil-estudiante.service';

describe('PerfilEstudianteController', () => {
  let controller: PerfilEstudianteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfilEstudianteController],
      providers: [PerfilEstudianteService],
    }).compile();

    controller = module.get<PerfilEstudianteController>(PerfilEstudianteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
