import { Test, TestingModule } from '@nestjs/testing';
import { RecordAcademicoService } from './record-academico.service';

describe('RecordAcademicoService', () => {
  let service: RecordAcademicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordAcademicoService],
    }).compile();

    service = module.get<RecordAcademicoService>(RecordAcademicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
