import { Test, TestingModule } from '@nestjs/testing';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';

describe('PeopleController', () => {
  let controller: PeopleController;
  let service: PeopleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeopleController],
      providers: [
        {
          provide: PeopleService,
          useValue: {
            findByName: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PeopleController>(PeopleController);
    service = module.get<PeopleService>(PeopleService);
  });

  it('should call PeopleService.findByName with the correct search term', async () => {
    const search = 'Luke Skywalker';
    const findByNameSpy = jest
      .spyOn(service, 'findByName')
      .mockResolvedValue([]);

    await controller.getPersonByName(search);

    expect(findByNameSpy).toHaveBeenCalledWith(search);
  });

  it('should call PeopleService.findOne with the correct id', async () => {
    const id = '1';
    const findOneSpy = jest
      .spyOn(service, 'findOne')
      .mockResolvedValue({ id: 1, name: 'Luke Skywalker', movies: [] });

    await controller.findOne(id);

    expect(findOneSpy).toHaveBeenCalledWith(1);
  });
});
