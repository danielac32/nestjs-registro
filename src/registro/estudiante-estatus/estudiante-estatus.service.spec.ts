import { Test, TestingModule } from '@nestjs/testing';
import { EstudianteEstatusService } from './estudiante-estatus.service';

describe('EstudianteEstatusService', () => {
  let service: EstudianteEstatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstudianteEstatusService],
    }).compile();

    service = module.get<EstudianteEstatusService>(EstudianteEstatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
