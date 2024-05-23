import { Test, TestingModule } from '@nestjs/testing';
import { RecordAcademicoController } from './record-academico.controller';
import { RecordAcademicoService } from './record-academico.service';

describe('RecordAcademicoController', () => {
  let controller: RecordAcademicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordAcademicoController],
      providers: [RecordAcademicoService],
    }).compile();

    controller = module.get<RecordAcademicoController>(RecordAcademicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
