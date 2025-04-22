import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

describe('FilmsController', () => {
  let controller: FilmsController;
  let filmsService: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmsController],
      providers: [
        {
          provide: FilmsService,
          useValue: {
            findByName: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<FilmsController>(FilmsController);
    filmsService = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getFilmByName', () => {
    it('should call FilmsService.findByName with the correct search term', async () => {
      const search = 'A New Hope';
      const findByNameSpy = jest
        .spyOn(filmsService, 'findByName')
        .mockResolvedValue([]);
      await controller.getFilmByName(search);

      expect(findByNameSpy).toHaveBeenCalledWith(search);
    });
  });

  describe('findOne', () => {
    it('should call FilmsService.findOne with the correct id', async () => {
      const id = '1';
      const findOneSpy = jest.spyOn(filmsService, 'findOne').mockResolvedValue({
        id: 1,
        name: 'A New Hope',
        characters: [],
      });
      await controller.findOne(id);

      expect(findOneSpy).toHaveBeenCalledWith(1);
    });
  });
});
