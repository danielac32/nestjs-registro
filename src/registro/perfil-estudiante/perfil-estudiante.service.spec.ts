import { Test, TestingModule } from '@nestjs/testing';
import { PerfilEstudianteService } from './perfil-estudiante.service';

describe('PerfilEstudianteService', () => {
  let service: PerfilEstudianteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerfilEstudianteService],
    }).compile();

    service = module.get<PerfilEstudianteService>(PerfilEstudianteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
