import { Test, TestingModule } from '@nestjs/testing';
import { EstudianteEstatusController } from './estudiante-estatus.controller';
import { EstudianteEstatusService } from './estudiante-estatus.service';

describe('EstudianteEstatusController', () => {
  let controller: EstudianteEstatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudianteEstatusController],
      providers: [EstudianteEstatusService],
    }).compile();

    controller = module.get<EstudianteEstatusController>(EstudianteEstatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
